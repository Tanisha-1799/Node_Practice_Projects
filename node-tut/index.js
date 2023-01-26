//Trying basic coding syntax
//Just brushing the Javascript concepts


console.log("Hello !!!");
var a=20;
var b=30;
//console.log(a+b);
if(a===20){
    console.log("matched !!");
} 
//importing the data from different files 
const app=require('./app');
console.log("x="+app.x);
console.warn("y="+app.y);
console.log("z="+app.z());

const arr=[1,2,3,4,5,6,7,8,9];

let result=arr.filter((item)=>{
    return (item%2==0);

});
console.log(result);

//making use of file system non-global core module
const fs=require('fs');

fs.writeFileSync("First.txt","We have made this file by using the core module !!");

//both of these function work in same way.
function test1(a){
    return a*10;
}
//conversion into an arrow function
 const test2=(a)=>a*10;


 const colors=require('colors');
 console.log("Hello !!!".yellow);
 console.log("Tanisha".red);

 //explaining process object of node js
 //By this we can get the command line inputs 
 //console.log(process.argv[2]);

//now we will be using it to get the file to be created and the content of that file from command line input
const input=process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}else{
    console.log("Invalid Input !!");
}

const path=require('path');
//gives the pathof current directory
const dirPath=path.join(__dirname,"files");
fs.writeFileSync(dirPath+"/hello.txt","A simple file !!");
