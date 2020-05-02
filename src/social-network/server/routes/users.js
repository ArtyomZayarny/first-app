const  {Router} = require('express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {requireAuth} = require('../middleWare')
const User  = require('../../models/User')
const router = Router();

router.post('/signup', async (req,res) => {
    const {email,password} = req.body;

    const isUser = await User.findOne({email:email.toLowerCase()})
    if (isUser) {
        return res.sendHTTPError(400, 'User already exist');
    } 
    const HashPassword = bcrypt.hashSync(password,10)

    const newUser = new User({email:email,password:HashPassword});
    await newUser.save()
    res.send({message: 'Success!'})
   
})

router.post('/auth', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email:email})

    if (!user) {
        return res.sendHTTPError(401, 'User does not exist');
    }
    bcrypt.compare(password, user.password, (err,result) => {
         if (result) {
                delete user.password;
                const authToken = jwt.sign({_id:user._id}, 'secret', {expiresIn:'1h'})
                res.send({user,authToken})
         } else {
            return res.sendHTTPError(401, 'Password is incorrect');
         }
    })
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