const express=require('express');
const cors=require('cors');
require('./db/config');
const User=require('./db/User');
const Product=require('./db/Product');

const app=express();
app.use(express.json());
app.use(cors());

//SignUp Api
app.post("/register",async (req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password;
    res.send(result);
})



//Login Api
app.post("/login",async (req,res)=>{
    if(req.body.email && req.body.password){
        let user=await User.findOne(req.body).select("-password");
    if(user){
        res.send(user);
    }else{
        res.send({result:"No user Found !"});
    }
    }else{
        res.send({result:"No user Found !"});
    }
})


//API to add products to the database
app.post('/add-product',async (req,res)=>{
    let product=new Product(req.body);
    let result=await product.save();
    res.send(result);
});


//api to display  the product list from the database
app.get('/products',async (req,res)=>{
    let products=await Product.find();
    if(products.length>0){
        res.send(products)
    }
    else{
        res.send({result:"No products found !!"});
    }

})


//Api to delete a specific product from database
app.delete("/product/:id",async (req,res)=>{
   
    const result=await Product.deleteOne({_id:req.params.id});
    res.send(result);
});

//Api to get the product that has a specific id
app.get("/product/:id",async (req,res)=>{
    let result=await Product.findOne({_id:req.params.id});
    if(result){
        res.send(result);
    }else{
        res.send({result:"No record found"})
    }
})


app.listen(5000);