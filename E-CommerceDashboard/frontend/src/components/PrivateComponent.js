//making a private component so that we can display only specific routes
//to the user when a specific condition is fulfilled
import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const PrivateComponent=()=>{
    const auth=localStorage.getItem("user");
    return auth?<Outlet />:<Navigate to='/signUp' />

};

export default PrivateComponent;