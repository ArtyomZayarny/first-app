const  {Router} = require('express')
const {requireAuth} = require('../middleWare')
const User  = require('../../models/User')
const router = Router();

router.post('/signup', async (req,res) => {

    const newUser = new User(req.body);

    try {
        await newUser.save();
    } catch (e) {
        if (e.code === 11000) {
            res.sendHTTPError(400,'User already exist');
        }
        throw err
    }
   
    res.send(newUser)
})

router.post('/auth', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email:email}).select('+password')
    const authToken = await user.signIn(password);
    delete user.password;
    res.send({authToken,user})
})

//Protect to show users
router.get('/api/users',requireAuth, async (req,res) => {
 const result =  await User.find({})
 res.send(result)
})

router.get('/api/me',requireAuth, async(req,res) => {
    const user = await User.findById(req.userId);
    res.send(user)
})



module.exports = router