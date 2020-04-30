const  {Router} = require('express')
const bcrypt = require('bcrypt');
const User  = require('../../models/User')
const router = Router();

router.post('/signup', async (req,res) => {
    const {email, name,password} = req.body;

    const isUser = await User.findOne({email:email.toLowerCase()})
    if (isUser) {
        return res.sendHTTPError(400, 'User already exist');
    } 
    const HashPassword = bcrypt.hashSync(password,10)

    const newUser = new User({email:email,name:name,password:HashPassword});
    await newUser.save()
    res.send({message: 'Success!'})
   
})

router.post('/auth', async (req, res) => {
    
})


router.get('/users', async (req,res) => {
 const result =  await User.find({})
 res.send(result)
})

router.get('/users/:id', async(req,res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
})


router.post('/create/user', async(req,res) => {
    const {name,email,password} = req.body;
    const newUser = new User({name: name, email:email})
    await newUser.save()
    res.send('user was added')
})


module.exports = router