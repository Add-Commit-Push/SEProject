var mongoose = require('mongoose');
var router = require('express').Router();
var Customer = mongoose.model('Customer');


router.post('/emp', function(req, res, next){
    var customer = new Customer({
        customername: 'ishmael',
        customeremail: 'sibisi@gmail.com',
        customerphone: '0619302686',
        status: "dismissed"
    });
    // customer.customername = req.body.username;
    // customer.customeremail = req.body.email;
    // customer.customerphone = req.body.phone;
    // customer.setPassword(req.body.password);

    // customer.customername = 'ishmael';
    // customer.customeremail = 'sibisi@gmail.com';
    // customer.customerphone = '0619302686';
    // customer.status = "dismissed";
    customer.setPassword('0000');

    customer.save().then(function(){
        console.log("[*] "+customer +" was added successfully.");
        //res.redirect('http://localhost:5000');
        return res.json({customer: customer.toAuthJSON()});
    }).catch(next);

    // customer.save().then(function(){
    //     console.log("[*] "+customer +" was added successfully.");
    //     res.redirect('http://localhost:5000');
    //     return res.json({customer: customer.toAuthJSON()});
    // }).catch(next);
});

module.exports = router;
