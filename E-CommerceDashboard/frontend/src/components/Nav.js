import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const Nav=()=>{
     const auth=localStorage.getItem("user");
     const navigate=useNavigate();
     const logout=()=>{
        localStorage.clear();
        navigate("/signUp");
     }
    
    return(
        <div>
        <img alt='logo'
        className='logo' 
        src='/logo_img.jpg' />
               
            {
                 auth ? <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signUp">Logout {JSON.parse(auth).name}</Link></li>       
               
            </ul>
            :
            <ul className='nav-ul nav-right'>
                    <li><Link to="/signUp">Sign Up</Link></li>
                    <li><Link to="/logIn">Log In</Link></li>

            </ul>
            }
        </div>
    )
}

export default Nav;