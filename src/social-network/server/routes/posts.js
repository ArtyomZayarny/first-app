const  {Router} = require('express')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const {requireAuth} = require('../middleWare')
const Post  = require('../../models/Post')
const router = Router();

//Get All posts
router.get('/posts',requireAuth, async (req,res) => {
    const result =  await Post.find({})
    res.send(result)
   })
   
router.post('/posts', requireAuth, async (req,res) => {
    const {userId,title} = req.body;
    const newPost = await Post({userId,title});
    await newPost.save()
    res.send({message: 'Post was created'})
})
router.delete('/posts/:id',requireAuth, async(req,res) => {
    await Post.deleteOne({_id:req.params.id})
    res.send('Remove success')
 
   
 //await Post.remove({_id:ObjectId(req.params)})
})

// //Get one post
// router.get('/post/:id',requireAuth, async(req,res) => {
//     const post = await User.findOne({_id:req.userId}, {password:false})
//     res.send(post)
// })

module.exports = router

