//FRAMEWORK TO CREATE ROUTES    
const express=require('express')
//CONNECTING TO MONGODB
const mongoose=require('mongoose')
//USED TO STORE ALL PRIVATE KEY IN .ENV FILE
const dotenv=require('dotenv') //OR JUST require('dotenv/config')
//CORS USED TO HANDLE CROS ORIGIN ERROR WHILE SERVING THE API
const cors=require('cors')

//IMPORT ROUTES
const postRoute=require('./routes/posts')

dotenv.config()
const app=express();

//MIDDLEWARE
    //BODY PARSER FOR THE POST REQUEST 
    app.use(express.json()) 
    //EX:LHOST:3000/POSTS/...THE ROUTES
    app.use('/posts',postRoute)
    //ADDING THE CORS MIDDLEWARE
    app.use(cors())

//CONNECT TO DB
mongoose.connect(process.env.MONGO_CONNECT,
{useNewUrlParser: true},
(err)=>console.log("connected to mongo!!!")
)



//LISTENING TO SERVER
app.listen(3000)