const express = require('express');
const router = express.Router();
const User = require('../models/Users');

router.get('/', async (req, res) => {
    
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err});
    }

})

router.post('/', async (req, res) => {
    console.log(req.body);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        description: req.body.description
    });

    try {
       const savedUser = user.save()
        res.json(savedUser)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router;