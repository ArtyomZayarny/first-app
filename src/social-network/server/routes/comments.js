const  {Router} = require('express')
const {requireAuth} = require('../middleWare')
const Comment  = require('../../models/Comment')
const router = Router();


//Create comment
router.post('/posts/:id/comments', requireAuth, async (req,res) => {
 const comment = new Comment({
     body:req.body.text,
     author:req.userId,
     entityId:req.params.id,
     entityModel:'Post'
 });
 await comment.save();
 res.send(comment)
})
//Get comment
router.get('/posts/:id/comments',requireAuth, async (req,res) => {
    const comment  =  await Comment.find({entityId:req.params.id}).populate('author');
    res.send(comment)
   })

//Delete comment
router.delete('/comments/:id',requireAuth, async(req,res) => {
    await Comment.deleteOne({_id:req.params.id})
    res.send('Comment was removed')
})



//Get one comment
router.get('/comments/:id',requireAuth, async(req,res) => {
    const id = req.params.id;
    const comment = await Comment.findOne({_id:id});
    res.send(comment)
})

module.exports = router