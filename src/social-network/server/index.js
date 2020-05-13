const express = require('express');
const mongoose = require('mongoose')
const {errorHandler} = require('./middleWare')
const db = mongoose.connection;
const cors = require('cors');

const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments')

const port = 8080;

const app = express();

app.use(express.urlencoded({extends:true}))
app.use(express.json())
app.use(errorHandler)
app.use(cors());
app.use(userRoute,postRoute,commentRoute)

app.use((req,res,next) => {
    res.status(404).send({message:'NOt found'})
})
app.use((err, req,res,next) => {
    res.status(500).send({message:err.message})
})

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://social:123@cluster0-fo52v.mongodb.net/test', {
            useNewUrlParser:true,
            useUnifiedTopology: true
        })
       db.once('open', function(){})
        app.listen(port, (err) => {
            if (err) {
                console.log(err);
            }
            console.log(`Server  is running on ${port} port`);
            
        })
    } catch (e) {
        console.log(e);
        
    }
}
start()
/*
[
    {
        id:''
        userInfo:{
            email:''
        },
        comments: [
            {
                userId:'',
                text:''
            }
        ]

    }
]


*/


