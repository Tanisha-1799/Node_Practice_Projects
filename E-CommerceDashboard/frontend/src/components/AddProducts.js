import React, { useState } from 'react';

const AddProducts=()=>{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');

    const addproduct=()=>{
        alert(name+" "+price+" "+category+" "+company);
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