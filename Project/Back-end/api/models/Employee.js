var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;



var EmployeeSchema = new mongoose.Schema({
    employeename: {type: String, required: [true, "Needs a name"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']},
    employeeemail: {type: String, lowercase: true, unique: [true, "Email already exists"], required: [true, "Needs an email"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    employeephone: {type: String, required: [true, "Needs a phone number"]},
    designation: String,
    status: {type: String, required: [true, "Status of employee required"]},//dismissed, working, paternity/maternity...
    worktype: String,
    employeeid: String,
    employeeadress: {
        first: String,
        second: String,
        third: String,
        areacode: Number,
        city: String,
        province: String
    },
    hash: String,
    salt: String
}, {timestamps: true});

EmployeeSchema.plugin(uniqueValidator, {message: 'is already taken.'});

EmployeeSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

EmployeeSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

EmployeeSchema.methods.generateJWT = function() {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000)
    }, secret);
};

EmployeeSchema.methods.toAuthJSON = function(){
    return {
        employeeeame: this.employeeeame,
        employeeemail: this.employeeemail,
        token: this.generateJWT(),
        employeephone: this.employeephone,
        employeeid: this.employeeid
    };
};

EmployeeSchema.methods.toProfileJSONFor = function(){
    return {
        employeeeame: this.employeeeame,
        employeephone: this.employeephone
    };
};


mongoose.model('Employee', EmployeeSchema);
