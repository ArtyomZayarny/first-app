const  {Router} = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {requireAuth} = require('../middleWare')
const User  = require('../../models/User')
const router = Router();

router.post('/signup', async (req,res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.send({message:'User was created'})
})

router.post('/auth', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email:email})
})

//Protect to show users
router.get('/users',requireAuth, async (req,res) => {
 const result =  await User.find({})
 res.send(result)
})

router.get('/user/:id',requireAuth, async(req,res) => {
    const user = await User.findOne({_id:req.userId}, {password:false})
    res.send(user)
})



module.exports = router