const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const mongoose = require('mongoose')
// const { env } = require('process')


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

mongoose.connect('mongodb://127.0.0.1:27017/dryFruites')
.then(()=>{console.log("DB connected sucessfully");})
.catch((error)=>{console.error();})

const PORT = 8080
app.listen(PORT, ()=>{console.log(`Server connected sucessfully at PORT: ${PORT}`);})