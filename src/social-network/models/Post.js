const {Schema, model}= require('mongoose')

const PostSchema = Schema({
    title:{
        type:String,
        required:true
    },
    body: {
        type:String,
        required:true,
    },
    author: {
        type:Schema.ObjectId,
        require:true,
        ref:'User'
    }
},
    {
        timestamps: {
            createdAt:'created_at',
            updatedAt:'updated_at'
        }
    }
);

module.exports = model('Post',PostSchema)