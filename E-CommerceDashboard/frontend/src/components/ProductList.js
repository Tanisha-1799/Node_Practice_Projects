import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct=async (id)=>{
    let result=await fetch(`http://localhost:5000/product/${id}`,{
      method:"Delete"
    });
    result=await result.json();
    if(result){
      alert("Product deleted successfully !!")
      getProducts();
    
    }

  }

  return (
    <div className="product-List">
      <h1>Product List </h1>
      <ul>
        <li><h3>S.no</h3></li>
        <li><h3>Name</h3></li>
        <li><h3>Price</h3></li>
        <li><h3>Category</h3></li>
        <li><h3>Company</h3></li>
        <li><h3>Operation</h3></li>
      </ul>
      {products.map((item,index) => 
        <ul key={item._id}>
          <li>{index+1}</li>
          <li>{item.name}</li>
          <li>$ {item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
          <button className="delete-button" onClick={()=>deleteProduct(item._id)}>Delete</button>
          <button className="update-button"><Link to="/update">Update</Link></button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProductList;
