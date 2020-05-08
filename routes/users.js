const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const User = require('../models/User');



router.post('/', [
    check('name', 'name is required')
    .not()
    .isEmpty(),
    check('email', 'please incluse a vali email').isEmail(),
    check('password', 'please incluse password more than 6 characters').isLength({
        min: 6,
    }),
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    res.send(req.body);
    res.send('passed');
    // res.send('User saved')
});

module.exports =  router;