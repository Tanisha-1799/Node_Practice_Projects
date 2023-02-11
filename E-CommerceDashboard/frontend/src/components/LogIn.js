import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const LogIn=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    });

    const handleLogin= async ()=>{
        let result=await fetch("http://localhost:5000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }

        });
        result=await result.json();
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            navigate("/");

        }else{
            alert("Please enter correct details !!");
        }
    }

    return(
        <div className='login'>
         <h1 className='heading-style'>Login</h1>
        <input type="text" className='input-style' placeholder="Enter Email"
        onChange={(e)=>setEmail(e.target.value)} value={email} />
        <input type="password" className='input-style' placeholder="Enter Password"
         onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <button className='button-style' onClick={handleLogin}>Login</button>
            
        </div>
    )
}

export default LogIn;