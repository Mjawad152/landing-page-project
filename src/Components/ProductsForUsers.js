import React, { useEffect, useState } from 'react';
import { getData, deleteProduct } from '../Services/api';

const ProductsForUsers = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
           
            const userDetail = await getData();
            console.log("rinng or not")
            
            setData(userDetail);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

  return (

    <div>
        
      {data.map(iteme => (
        <div
          className="card"
          style={{ backgroundColor: "black", width: "23rem", borderRadius: "20px", margin: "5px", padding: "15px" }}
          key={iteme._id}
        >
          <img
            src={iteme.productUrl}
            className="card-img"
            alt={iteme.productName}
            style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflow: 'hidden', backgroundColor: "black" }}
          />
          <div className="card-body" style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', overflow: 'hidden', backgroundColor: "black" }}>
            <p>ID: {iteme._id}</p>
            <h5 className="card-title">Name: {iteme.productName}</h5>
            <p className="card-text">Description: {iteme.productDescription}</p>
            <p className="card-text">Price: {iteme.productPrice}</p>
            <a href="#" className="btn btn-primary">View Details</a>
            <button style={{ margin: "10px", padding: "5px" }} className="btn btn-danger">
            Add To Cart
          </button>
            <div className="d-flex" style={{ padding: "10px" }}>
           
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default ProductsForUsers;

