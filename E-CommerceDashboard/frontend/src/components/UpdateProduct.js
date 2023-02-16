import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const UpdateProduct=()=>{

    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    
    //const navigate=useNavigate();

    const updateproduct=async () =>{
        alert(name+price+company+category);

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