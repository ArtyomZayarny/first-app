const express = require('express');
const mongoose = require('mongoose')

const bodyParser = require('body-parser');
const userRoute = require('./routes/users')

const port = 5000;

const app = express();

app.use(userRoute)

async function start() {
    try {
        await mongoose.connect(
            'mongodb+srv://social:123@cluster0-fo52v.mongodb.net/todos', {
            useNewUrlParser:true,
            useFindAndModify:false,
            useUnifiedTopology: true
        })
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


