import React,{useState} from 'react';

const SignUp=()=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const collectData=async ()=>{
       // alert(name+" "+email+" "+password);
       let result=await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        },
       })
       result=await result.json();
       console.warn(result);
    }

    return(
        <div className='container-style'>
            <h1 className='heading-style'>Register</h1>
            <input className='input-style' 
            type="text"
            value={name} 
            onChange={(e)=>setName(e.target.value)} 
            placeholder="Enter Your Name" />
            <input className='input-style' 
            type="text" 
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            placeholder="Enter Your Email" />
            <input className='input-style' 
            type="password" 
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            placeholder="Enter Password" />
            <button className='button-style' onClick={collectData}>SignUp</button>
        </div>
    )
}
export default SignUp;