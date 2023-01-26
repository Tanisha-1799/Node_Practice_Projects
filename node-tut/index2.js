//Making a server
//importing the core module http:
const http=require('http');
const data=require('./data');

http.createServer((req,res)=>{
    //we can also make a function with this functionality
    //and then call that function inside this createServer function as a parameter
    
    //making a response so making a header

    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();

}).listen(4500);