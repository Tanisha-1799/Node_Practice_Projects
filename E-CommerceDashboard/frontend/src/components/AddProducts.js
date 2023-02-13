import React from 'react';

const AddProducts=()=>{
    return(
        <div className='add-product'>
            <h1 className='heading-style'>Add Products</h1>
            <input type="text" className='input-style' placeholder="Enter product name" />
            <input type="text" className='input-style' placeholder="Enter product price" />
            <input type="text" className='input-style' placeholder="Enter product category" />
            <input type="text" className='input-style' placeholder="Enter product company" />
            <button className='button-style'>Add Product</button>


        </div>
    )
}

export default AddProducts;