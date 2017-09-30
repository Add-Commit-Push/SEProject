var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;



var CustomerSchema = new mongoose.Schema({
    customername: {type: String, required: [true, "Needs a name"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']},
    customeremail: {type: String, lowercase: true, unique: [true, "Email already exists"], required: [true, "Needs an email"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    customerphone: {type: String, required: [true, "Needs a phone number"]},
    designation: String,
    status: {type: String, required: [true, "Status of customer required"]},//dismissed, working, paternity/maternity...
    worktype: String,
    customerid: String,
    customeradress: {
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

CustomerSchema.plugin(uniqueValidator, {message: 'is already taken.'});

CustomerSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

CustomerSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

CustomerSchema.methods.generateJWT = function() {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000)
    }, secret);
};

CustomerSchema.methods.toAuthJSON = function(){
    return {
        customereame: this.customereame,
        customeremail: this.customeremail,
        token: this.generateJWT(),
        customerphone: this.customerphone,
        customerid: this.customerid
    };
};

CustomerSchema.methods.toProfileJSONFor = function(){
    return {
        customereame: this.customereame,
        customerphone: this.customerphone
    };
};


mongoose.model('Customer', CustomerSchema);
