const express = require('express');

const port = 5000;

const app = express();

app.get('/', (req,res) => {
    res.send('Hellow World')
})

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        
    }
    console.log(`Server  is running on ${port} port`);
    
})