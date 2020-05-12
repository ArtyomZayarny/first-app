const {Schema, model}= require('mongoose')

const CommentSchema = new Schema({
    body: {
        type:String,
        required:true,
    },
    author: {
        type:Schema.ObjectId,
        require:true,
        ref:'User'
    },
    entityId: {
        type:Schema.ObjectId,
        require:true,
        refPath:'entityModel'
    },
    entityModel:{
        type:String,
        require:true,
        enum:['Post']
    }
},
{
    timestamps: {
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
}  
)


module.exports = model('Comment',CommentSchema)