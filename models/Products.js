const mongoose = require('mongoose')
 
const productSchema = new mongoose.Schema({
// name:
// discription:
// quality:
// rating:
// quantity:
// expiry date:
// production date:
// price:
// pictures:

name:{
    type : String,
    trim : true,
    require : true
},
image : {
type : String,
require : true,
default : true
},
price : {
    type : Number,
    min : 0,
    require : true
},
discription : {
    type : String,
    trim : true,
    require : true
}
})

// mongoose.model(modelName, schema)
let Product = mongoose.model(Products, schema)
module.exports = Product;