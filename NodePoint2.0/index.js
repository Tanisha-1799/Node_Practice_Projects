const express=require('express');
const app=express();
//If we want to apply the middleware on group of routers then
const route=express.Router();


//making middleware
//this is application level middle ware
const reqFilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("Please Provide age !");
    }else  if(req.query.age<18){
        resp.send("You cannot access this Age !!");
    }
    else{
    next();
    }
};
//if the below line is used then the middleware will work on all the routes.
//app.use(reqFilter);
//applying middleware on group of routes
route.use(reqFilter);

app.get('/',(req,res)=>{
    res.send("Hello , To home page !")
});
//applying middleware on single route

app.get('/users',reqFilter,(req,res)=>{
    res.send("Welcome  ,to users page !")
});

app.get('/about',(req,res)=>{
    res.send("Welcome  ,to about page !")
});

route.get('/contact',(req,res)=>{
    res.send("Welcome  ,to contact page !")
});

route.get('/help',(req,res)=>{
    res.send("Welcome  ,to help page !")
});
app.use('/',route);

app.listen(4200);