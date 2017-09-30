var router = require('express').Router();
var mongoose = require('mongoose');
var MenuItem = mongoose.model('MenuItem');

// return a list of tags
router.get('/', function(req, res, next) {
    MenuItem.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;
