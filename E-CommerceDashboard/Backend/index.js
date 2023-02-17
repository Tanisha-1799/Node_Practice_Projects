const express=require('express');
const cors=require('cors');
require('./db/config');
const User=require('./db/User');
const Product=require('./db/Product');
const Jwt=require('jsonwebtoken');
//Defining the key for token
const jwtKey='e-comm';

const app=express();
app.use(express.json());
app.use(cors());

//SignUp Api
app.post("/register",async (req,res)=>{
    let user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password;
    Jwt.sign ( {result},jwtKey, {expiresIn  : "2h"}, (err,token)=>{
        if(err){
            res.send({result:"Something went wrong, Please try after sometime"});  
        }
        res.send ( {result, auth: token});
    })
})



//Login Api
app.post("/login",async (req,res)=>{
    if(req.body.email && req.body.password){
        let user=await User.findOne(req.body).select("-password");
    if(user){
        Jwt.sign ( {user},jwtKey, {expiresIn  : "2h"}, (err,token)=>{
            if(err){
                res.send({result:"Something went wrong, Please try after sometime"});  
            }
            res.send ( {user, auth: token});
        })
       
    }else{
        res.send({result:"No user Found !"});
    }
    }else {
        res.send({result:"No user Found !"});
    }
})


//API to add products to the database
app.post('/add-product',verifyToken,async (req,res)=>{
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
});

//api to update the product
app.put("/product/:id",async (req,res)=>{
    let result=await Product.updateOne(
        {
            _id:req.params.id
        },
        {
            $set:req.body
        }
    )
    res.send(result);
});

app.get("/search/:key",verifyToken,async (req,res)=>{
    let result=await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {price:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {company:{$regex:req.params.key}}
        ]
    });
    res.send(result);
});


//making a middleware to verify authentication token
//middleware always have three parameters
function verifyToken(req,res,next){
    let token=req.headers['authorization'];
    if(token){
        token=token.split(' ')[1];
        Jwt.verify(token, jwtKey,(err,valid)=>{
            if(err){
                res.status(401).send("Please proide valid token with header");
            }else{
                next();
            }
        });

    }else{
        res.status(403).send("Please add token with header");
    }
    //console.warn("middleware called",token);
   

}


app.listen(5000);