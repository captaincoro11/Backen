
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({});
const url = 'mongodb+srv://PranjulShukla:beena55@cluster0.qicx6ls.mongodb.net/';

exports.connectDatabase = ()=>{
    mongoose.connect(url).then((con)=>console.log(`DataBase Connected ${con.connection.host}`)).catch((error)=>console.log(error))
}