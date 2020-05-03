const {Schema, model}= require('mongoose')

const schema = new Schema({
    author: {
        type:String
    },
})


module.exports = model('Comment',schema)