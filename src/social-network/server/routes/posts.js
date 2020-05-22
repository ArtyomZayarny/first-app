const  {Router} = require('express')
const {requireAuth} = require('../middleWare')
const Post  = require('../../models/Post')
const router = Router();

//Get All posts
router.get('/api/posts',requireAuth, async (req,res) => {
    const result =  await Post.find({}).populate('author')
    res.send(result)
   })
//Create post
router.post('/api/posts', requireAuth, async (req,res) => {
    const newPost = req.body;
    newPost.author = req.userId;
    const post = await new Post(newPost)
    await post.save();
    res.send(post)
})
//Delete post
router.delete('/api/posts/:id',requireAuth, async(req,res) => {
    await Post.deleteOne({_id:req.params.id})
    res.send('Remove success')
})
//Get post
router.get('/api/posts/:id',requireAuth, async(req,res) => {
    const id = req.params.id;
    const post = await Post.findOne({_id:id});
    res.send(post)
})


module.exports = router

