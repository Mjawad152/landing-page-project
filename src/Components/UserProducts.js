import React, { useEffect, useState } from 'react';
import { getData, deleteProduct } from '../Services/api';

const ProductsGrid = () => {
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


    const handleDeleteItem = async (productId) => {
        try {
            console.log('Deleting item with ID:', productId);

           
            await deleteProduct(productId);

            console.log('Item deleted successfully');

           
            fetchData();
        } catch (error) {
            console.error('Error deleting item:', error.message);
            
        }
    };

    // const handleInputChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value,
    //     });
    // };
    // const buttonStyle = { marginRight: '30px' };

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
            <div className="d-flex" style={{ padding: "10px" }}>
              {/* <button className="btn btn-secondary" style={buttonStyle}>Edit</button> */}
              <button className="btn btn-danger" onClick={() => handleDeleteItem(iteme._id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}

      {/* <button className="btn btn-primary" onClick={handleAddItem}>Add Product</button> */}
    </div>
  );
}


export default ProductsGrid;

