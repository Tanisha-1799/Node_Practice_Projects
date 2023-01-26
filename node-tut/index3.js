//Doing CRUD operation on file system

const fs=require("fs");
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;


//creating file
//fs.writeFileSync(filePath,"This is a simple text file !!");

//Reading the file
//fs.readFile(filePath,'utf8',(err,item)=>{
//    console.log(item);
//})

//updating a file

//fs.appendFile(filePath,"and file name is apple.txt !!",(err)=>{
//    if(!err) console.log("File is Updated !!!");
//});


//deleting the file
fs.unlinkSync(filePath);