var router = require('express').Router();

router.use('/', require('./users'));
router.use('/customer', require('./customer'));
router.use('/employee', require('./employee'));
router.use('/profiles', require('./profiles'));
router.use('/inventoryitem', require('./inventoryitem'));
router.use('/menuitem', require('./menuitem'));

router.use(function(err, req, res, next){
  if(err.name === 'ValidationError'){
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function(errors, key){
        errors[key] = err.errors[key].message;

        return errors;
      }, {})
    });
  }

  return next(err);
});

module.exports = router;