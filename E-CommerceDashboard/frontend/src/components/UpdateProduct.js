import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

const UpdateProduct=()=>{

    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const params=useParams();

    useEffect(()=>{
        console.warn(params);
        getProductDetails();
    },[]);

    const getProductDetails=async ()=>{
        let result=await fetch(`http://localhost:5000/product/${params.id}`);
        result=await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
    
    const navigate=useNavigate();

    const updateproduct=async () =>{
        //alert(name+price+company+category);
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:'Put',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':"application/json"
            }
        });
        result=await result.json();
        navigate("/");


    }

    return(
        <div className='add-product'>
        <h1 className='heading-style'>Update Products</h1>
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
        
        <button onClick={updateproduct} className='button-style'>Update Product</button>


    </div>
    )
};

export default UpdateProduct;