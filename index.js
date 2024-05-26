const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const port = process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.send("Hi therr")
});

app.listen(port,()=>{
    console.log("Server stareted on port")
})