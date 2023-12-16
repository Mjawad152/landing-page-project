import React, { useState,useEffect } from "react";
import "./TopProduct.css";
import { useCart } from "./CartContext";

import { getItems } from '../Services/api';
import ProductsForUsers from "./ProductsForUsers";

function TopProduct() {
  const { addToCart } = useCart(); 
 

  const handleAddToCart = (product) => {
    addToCart(product);
  };



    const [data, setData] = useState([]);
  

    useEffect(() => {
      
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
           
            const items = await getItems();

            
            setData(items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }; 
return (

  <div style={{backgroundColor:"black",}}>
  <div  style={{ backgroundColor: "black",width:"80vw",margin:"0 auto" }}>
    <h2 className="heading">Top Sellers</h2>
      
    {data.map(item => (
      <div
        className="card"
        style={{ backgroundColor: "black", width: "23rem", borderRadius: "20px", margin: "5px", padding: "15px" }}
        key={item._id}
      >
        <img
          src={item.image}
          className="card-img"
          alt={item.name}
          style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflow: 'hidden', backgroundColor: "black" }}
        />
        <div className="card-body" style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', overflow: 'hidden', backgroundColor: "black" }}>
          <p>ID: {item._id}</p>
          <h5 className="card-title">Name: {item.name}</h5>
          <p className="card-text">Description: {item.description}</p>
          <p className="card-text">Price: {item.price}</p>
          <a href="#" className="btn btn-primary">view Details</a>
          <button onClick={() => handleAddToCart(item)} style={{ margin: "10px", padding: "5px" }} className="btn btn-danger">
            Add To Cart
          </button>
          <div className="d-flex" style={{ padding: "10px" }}>
            
          </div>
        </div>
      </div>
    ))}
     <h2 className="heading">New Arrival</h2>
    <ProductsForUsers/>

  
  </div>
  </div>
   
);
}

export default TopProduct;
