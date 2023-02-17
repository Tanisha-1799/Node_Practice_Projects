import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';



const AddProducts=()=>{
    const [name,setName]=useState('');
    const [price,setPrice]=useState('');
    const [category,setCategory]=useState('');
    const [company,setCompany]=useState('');
    const [error,setError]=useState(false);
    const navigate=useNavigate();

    const addproduct= async()=>{
        //Adding the validations to the form
        if(!name||!price||!category||!company){
            setError(true);
            return false;
        }



       // alert(name+" "+price+" "+category+" "+company);
       //integrating api here, sending data to the database
        //taking the id of the current user from local storage
        //since the dat in the local storage is in json form so we have to stringify it
        const userId=JSON.parse(localStorage.getItem("user"))._id;
        let result=await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json',
                authorization :`bearer ${JSON.parse(localStorage.getItem('token'))}`
              
            },
           })
           result=await result.json();
           console.warn(result);
           //storing data in the local storage of the browser
           //localStorage.setItem("user",JSON.stringify(result));
           if(result){
            alert("Product added Successfully !!");
            navigate('/');
           }

           


    }

    return(
        <div className='add-product'>
            <h1 className='heading-style'>Add Products</h1>
            <input type="text" className='input-style' placeholder="Enter product name" 
                onChange={(e)=>setName(e.target.value)} value={name}
            />
            {error && !name && <span className='error'>Enter a valid name !</span>}
            <input type="text" className='input-style' placeholder="Enter product price" 
                onChange={(e)=>setPrice(e.target.value)} value={price}
            />
             {error && !price && <span className='error'>Enter a valid price !</span>}
            
            <input type="text" className='input-style' placeholder="Enter product category" 
                onChange={(e)=>setCategory(e.target.value)} value={category}
            />
             {error && !category && <span className='error'>Enter a valid category !</span>}
            
            <input type="text" className='input-style' placeholder="Enter product company" 
                onChange={(e)=>setCompany(e.target.value)} value={company}
            />
             {error && !company && <span className='error'>Enter a valid company !</span>}
            
            <button onClick={addproduct} className='button-style'>Add Product</button>


        </div>
    )
}

export default AddProducts;