const express = require ('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' })

const app = express();
app.use(express.json())




//! connect database

mongoose.connect(
    process.env.Mongo_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
)
.then(res=> console.log('DataBase connected'))
.catch((err) => console.log(err) ) 



//! Routes
app.use('/users',require('./Routes/userRoutes') )    



//! create server
const port = process.env.PORT ;
app.listen (port,(err)=> {
    err? console.log(err) : console.log('server is running on  port', port ) 
})