const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { connectDatabase } = require('./db');
const taskRoutes = require('./routes/task');
const cors = require('cors');
const bodyParser = require('body-parser')


dotenv.config({});

connectDatabase();
app.use(cors());
app.use(express.json({limit:"50mb"}))
app.use(express.static('public'))
app.use('/task',taskRoutes)


const port = process.env.port || 5000;

app.get('/',(req,res)=>{
    res.json("HELLO BABY")
})




app.listen(port,()=>{
    console.log(`It started on ${port}`)
})
