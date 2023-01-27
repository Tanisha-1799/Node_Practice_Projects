const express=require('express');
const app=express();
//getting the required path of the html pages
const path=require('path');
const publicPath=path.join(__dirname,'public');

//making a template engine !
//now we have to use views folder because the ejs engine only look for views folder

app.set('view engine','ejs');


//app.use(express.static(publicPath));

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/home.html`);

});
//rendering an ejs page
app.get('/profile',(req,res)=>{
    const user={
        name:'Jenifer Katty',
        email:'jeniferkat@abc.com',
        city:'Newyork',
        skills:['java','react','node']
    }
    res.render('profile',{user});

});
app.get('/login',(_,res)=>{
    
    res.render('login');

});

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);

});
app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`);

});
//url not matching page !
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/404.html`);

});



app.listen(4200);