const {Schema, model}= require('mongoose')

const schema = new Schema({
    title: {
        type: String
    },
    author: {
        type:String
    },
    commets: {
        type:Array
    }
  
})


module.exports = model('Post',schema)