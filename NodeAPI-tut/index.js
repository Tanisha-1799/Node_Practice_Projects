const mongoose=require('mongoose');

//making function to get data from db

const SaveInDb=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    //creating a schema
    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number,
        category:String
    });
    //Creating model
    const ProductModel=mongoose.model('products',ProductSchema);
    //storing static data
    let data=new ProductModel({name:"m8",brand:"apple",price:1000,category:"mobile"});
    let result=await data.save();
    console.log(result);

}
//SaveInDb();


//Updating the record in db
const updateInDb=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    //creating a schema
    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number,
        category:String
    });
    //Creating model
    const ProductModel=mongoose.model('products',ProductSchema);
    let data=await ProductModel.updateOne(
        {name:"A2-z"},
        {
            $set:{name:"A2-z Pro max",price:300}
        }
    )
    console.log(data);

}

//updateInDb();

//Deleting the record in DB
const deleteInDb=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    //creating a schema
    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number,
        category:String
    });
    //Creating model
    const ProductModel=mongoose.model('products',ProductSchema);
    let data=await ProductModel.deleteOne({name:"m8"});
    console.log(data);
}
//deleteInDb();

//Finding record in Db
const findInDb=async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    //creating a schema
    const ProductSchema=new mongoose.Schema({
        name:String,
        brand:String,
        price:Number,
        category:String
    });
    //Creating model
    const ProductModel=mongoose.model('products',ProductSchema);
    //reading data from db
    //reads all records
    //let data=await ProductModel.find();
    //to read specific record
    let data=await ProductModel.find({name:"A2-z Pro max"});
    console.log(data);
};
//findInDb();