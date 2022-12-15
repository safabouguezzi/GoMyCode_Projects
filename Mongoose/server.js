const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8081

mongoose.connect("mongodb+srv://mongodb_user:mongodb_user@cluster0.spa6pxi.mongodb.net/?retryWrites=true&w=majority", () => console.log("database is connected"))

app.use(express.json())
app.use('/person', require('./routes/useRoutes'))

app.listen(port, () => console.log('server running on 8081'))