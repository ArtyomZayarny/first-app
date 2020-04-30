const  {Router} = require('express')
const mongoose = require('mongoose'); 
const User  = require('../../models/User')
const router = Router();


router.get('/users', async (req,res) => {
 const result =  await User.find({})
 res.send(result)
})

router.get('/users/:id', async(req,res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
})



router.post('/users', async(req,res) => {
    const name = req.body.name;
    const newUser = new User({name: name})
    await newUser.save()
    res.send('user was added')
})


module.exports = router