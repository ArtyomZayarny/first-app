const  {Router} = require('express')
const {requireAuth} = require('../middleWare')
const Comment  = require('../../models/Comment')
const router = Router();


//Create comment
router.post('/comments', requireAuth, async (req,res) => {
    const {postId,userId,text} = req.body;
    const newComment = await Comment({postId,userId,text});
    await newComment.save()
    res.send({message: 'Comment was created'})
})

//Delete comment
router.delete('/comments/:id',requireAuth, async(req,res) => {
    await Comment.deleteOne({_id:req.params.id})
    res.send('Comment was removed')
})

//Get all comment
router.get('/comments',requireAuth, async (req,res) => {
    const result =  await Comment.find({})
    res.send(result)
   })

//Get one comment
router.get('/comments/:id',requireAuth, async(req,res) => {
    const id = req.params.id;
    const comment = await Comment.findOne({_id:id});
    res.send(comment)
})

module.exports = router