//Making Apis using express framework and its methods

const express=require('express');
const app=express();//executing the express function

//home page
app.get('',(req,res)=>{
    res.send(`
    <h1>Hello, This is home Page !!!</h1>
    <a href="/about">Go to About page</a>
    <a href="/help">Go to Help Page</a>
    `);


});

//about page
app.get('/about',(req,res)=>{
    //making html tags
    res.send(`
        <input type="text" placeholder="User Name" value="${req.query.name}" />
        <button>Click Me !!</button>
        <a href="/">Go to Home Page</a>
    `);
});

//help page
app.get('/help',(req,res)=>{
    //sending json data
    res.send({
        name:'Andrew Taite',
        email:'andrewTiteabc@abc.com',
        contact:9928829,
    });
});

app.listen("4200");