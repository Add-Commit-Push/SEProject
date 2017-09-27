var mongoose = require('mongoose');
var router = require('express').Router();
var Employee = mongoose.model('Employee');


router.post('/emp', function(req, res, next){
    var employee = new Employee({
        employeename: 'ishmael',
        employeeemail: 'sibisi@gmail.com',
        employeephone: '0619302686',
        status: "dismissed"
    });
    // employee.employeename = req.body.username;
    // employee.employeeemail = req.body.email;
    // employee.employeephone = req.body.phone;
    // employee.setPassword(req.body.password);

    // employee.employeename = 'ishmael';
    // employee.employeeemail = 'sibisi@gmail.com';
    // employee.employeephone = '0619302686';
    // employee.status = "dismissed";
    employee.setPassword('0000');

    employee.save().then(function(){
        console.log("[*] "+employee +" was added successfully.");
        //res.redirect('http://localhost:5000');
        return res.json({employee: employee.toAuthJSON()});
    }).catch(next);

    // employee.save().then(function(){
    //     console.log("[*] "+employee +" was added successfully.");
    //     res.redirect('http://localhost:5000');
    //     return res.json({employee: employee.toAuthJSON()});
    // }).catch(next);
});

module.exports = router;
