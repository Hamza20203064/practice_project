const express = require('express')
const app = express()
const path = require('path')
const ejs = require('ejs')
const { env } = require('process')



const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Server connected sucessfully at PORT: ${PORT}`);
    
})