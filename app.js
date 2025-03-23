const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
// const { env } = require('process')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Server connected sucessfully at PORT: ${PORT}`);
    
})