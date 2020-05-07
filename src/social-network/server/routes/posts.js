const  {Router} = require('express')
const {requireAuth} = require('../middleWare')
const Post  = require('../../models/Post')
const router = Router();

//Get All posts
router.get('/posts',requireAuth, async (req,res) => {
    const result =  await Post.find({})
    res.send(result)
   })
//Create post
router.post('/posts', requireAuth, async (req,res) => {
   // console.log(req)
    const newPost = req.body;
    newPost.author = req.userId;
    const post = await new Post(newPost)
    await post.save();
    res.send(post)
})
//Delete post
router.delete('/posts/:id',requireAuth, async(req,res) => {
    await Post.deleteOne({_id:req.params.id})
    res.send('Remove success')
})
//Get post
router.get('/posts/:id',requireAuth, async(req,res) => {
    const id = req.params.id;
    const post = await Post.findOne({_id:id});
    res.send(post)
})


module.exports = router

