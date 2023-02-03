const express=require('express');
require('./config');
const Product=require('./product');

const app=express();
app.use(express.json());

//Post API
app.post("/create",async(req,res)=>{
    //console.log(req.body)
    //res.send("Done!");
    //getting the data from the body that is to be stored in the db
    let data=new Product(req.body);
    //saving the data in the db
    let result=await data.save();
    res.send("Data stored successfully !");

});

//Get API
app.get("/list",async (req,res)=>{
    let data=await Product.find();
    res.send(data);
});

//Delete API
//deleting according to the passed id
app.delete("/delete/:_id",async (req,res)=>{
    let data=await Product.deleteOne(req.params);
    res.send(data);

});

//put API
//to update data
app.put("/update/:_id",async (req,res)=>{
    let data=await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
        );
    res.send(data);

});

//search API

app.get("/search/:key",async (req,res)=>{

    let data=await Product.find(
        {
            "$or":[
                {"brand":{$regex:req.params.key}},
                {"name":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}}
            ]
        }
    );//find returns promise so using await
    res.send(data);
});

app.listen(5000);