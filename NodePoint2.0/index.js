const express=require('express');
const app=express();//executing the express function
app.get('',(req,res)=>{
    res.send("Hello, This is home Page !!!");


});
app.get('/about',(req,res)=>{
    res.send("This the about us page !!!!!");
});

app.listen("4200");