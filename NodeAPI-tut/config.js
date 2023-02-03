//This file is used to get connected to the required database
//so that the code looks clean and understandable

const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/product");

