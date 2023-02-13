import React, { useState } from 'react';

const AddProducts=()=>{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');

    const addproduct= async()=>{
       // alert(name+" "+price+" "+category+" "+company);
       //integrating api here, sending data to the database
        //taking the id of the current user from local storage
        const userId=JSON.stringify(localStorage.getItem("user"))._id;
        let result=await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            },
           })
           result=await result.json();
           console.warn(result);
           //storing data in the local storage of the browser
           //localStorage.setItem("user",JSON.stringify(result));


    }

    return(
        <div className='add-product'>
            <h1 className='heading-style'>Add Products</h1>
            <input type="text" className='input-style' placeholder="Enter product name" 
                onChange={(e)=>setName(e.target.value)} value={name}
            />
            <input type="text" className='input-style' placeholder="Enter product price" 
                onChange={(e)=>setPrice(e.target.value)} value={price}
            />
            <input type="text" className='input-style' placeholder="Enter product category" 
                onChange={(e)=>setCategory(e.target.value)} value={category}
            />
            <input type="text" className='input-style' placeholder="Enter product company" 
                onChange={(e)=>setCompany(e.target.value)} value={company}
            />
            <button onClick={addproduct} className='button-style'>Add Product</button>


        </div>
    )
}

export default AddProducts;