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




