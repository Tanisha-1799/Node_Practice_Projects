//Here we will define our schemas and models
const mongoose=require('mongoose');
//creating schema
const ProductSchema=new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
});
//Creating model
//give the name of your collection here
module.exports=mongoose.model('products',ProductSchema);