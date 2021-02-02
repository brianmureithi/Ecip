const express= require('express')
const morgan = require('morgan')
const bodyParser= require('body-parser')
const cors=require('cors')
const connectDB = require('./config/db')
const app=express();

//config.env to ./config/config.env
require('dotenv').config({
    path :  './config/config.env'
  });
connectDB()

//usebodyparser
app.use(bodyParser.json())



//development config
if(process.env.NODE_ENV==='development'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
    //gives info about request
}
//Loading routes
const authRouter = require('./routes/auth.route')

//use routes
app.use('/api', authRouter);
app.use((req,res,next) => {
    res.status(404).json({
        success:false,
        message:"Page not found"
    })
})

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log( `APP LISTENING AT PORT ${PORT}`);
});
