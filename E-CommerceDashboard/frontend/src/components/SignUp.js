import React from 'react';

const SignUp=()=>{
    return(
        <div className='container-style'>
            <h1 className='heading-style'>Register</h1>
            <input className='input-style' type="text" placeholder="Enter Your Name" />
            <input className='input-style' type="text" placeholder="Enter Your Email" />
            <input className='input-style' type="password" placeholder="Enter Password" />
            <button className='button-style'>SignUp</button>
        </div>
    )
}
export default SignUp;