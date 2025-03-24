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
quantity : {
    type : String,
    min : 0,
    require : true
},
discription : {
    type : String,
    trim : true,
}
// avgRating: {
//     type: Number,
//     default:0 
// },
// author:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'User'
// },
// reviews: [
//     {
//         type: mongoose.Schema.Types.ObjectId,
//         ref:'Review'
//     }

})

// mongoose.model(modelName, schema)
let Product = mongoose.model(Products, productSchema)
module.exports = Product;