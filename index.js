const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



dotenv.config({});


app.use(cors());
app.use(express.json({limit:"50mb"}))
app.use(express.static('public'))

const url = 'mongodb+srv://PranjulShukla:beena55@cluster0.qicx6ls.mongodb.net/';

const connectDatabase = ()=>{
    mongoose.connect(url).then((con)=>console.log(`DataBase Connected ${con.connection.host}`)).catch((error)=>console.log(error))
}

connectDatabase();

const port = process.env.port || 5000;

app.get('/',(req,res)=>{
    res.json("HELLO BABY")
})




app.listen(port,()=>{
    console.log(`It started on ${port}`)
})
