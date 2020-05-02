const  {Router} = require('express')
const bcrypt = require('bcrypt');
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
                res.send(user)
         } else {
            return res.sendHTTPError(401, 'Password is incorrect');
         }
    })
})


router.get('/users', async (req,res) => {
 const result =  await User.find({})
 res.send(result)
})

router.get('/users/:id', async(req,res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
})



module.exports = router