const  {Router} = require('express')
//const mongoose = require('mongoose');
const User  = require('../../models/User')
const router = Router();


router.get('/api/users', (req,res) => {
    res.send('users')
})

router.post('/users', async(req,res) => {
    const name = req.body.name;
    const newUser = new User({name: name})
    await newUser.save()
    res.send('user was added')
})


module.exports = router