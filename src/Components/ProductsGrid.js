// import React, { useState, useEffect } from 'react';
// import './ProductsGrid.css';
// import { useTopSellers } from "./TopSellersContext";

// export default function ProductsGrid() {
//   const buttonStyle = { marginRight: '30px' };
//   const { topSellers } = useTopSellers();
//   const [products, setProducts] = useState(topSellers);

//   const removeProduct = (id) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//   };

//   const addProduct = () => {
//     const newProduct = {
//       id: products.length + 1,
//       name: "New Product",
//       description: "",
//       price: "$900",
//       imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOhG8aLPgHwsLoxSGZ3iqJ8-ymaFlHIrjag&usqp=CAU",
//     };

//     setProducts([...products, newProduct]);
//   };


//   return (
//     <div>
//       {products.map((product) => (
//         <div
//         className="card"
//         style={{backgroundColor:"black", width: "23rem",borderRadius: "20px",margin: "5px",padding: "15px",}} key={product.id}>
//           <img
//             src={product.imageUrl}
//             className="card-img"
//             alt={product.name}
//             style={{width: '100%',height: '200px',objectFit: 'cover',borderTopLeftRadius: '15px',borderTopRightRadius: '15px',overflow: 'hidden',backgroundColor: "black",}}/>
//           <div className="card-body" style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', overflow: 'hidden', backgroundColor: "black" }}>
//             <p>ID: {product.id}</p>
//             <h5 className="card-title">Name: {product.name}</h5>
//             <p className="card-text">Description: {product.description}</p>
//             <p className="card-text">Price: {product.price}</p>
//             <a href="#" className="btn btn-primary">Go somewhere</a>
//             <div className="d-flex" style={{ padding: "10px" }}>
//               <button className="btn btn-secondary" style={buttonStyle}>Edit</button>
//               <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button>
//             </div>
//           </div>
//         </div>
//       ))}

//       <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react';
import { getItems, deleteItem } from '../Services/api';
import { UpdateProduct } from './UpdateProduct';

const ProductsGrid = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    image: '',
  });
  const [editingItemId, setEditingItemId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [Ndata, setNdata] = useState(null);

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

  const handleDeleteItem = async (itemId) => {
    try {
      console.log('Deleting item with ID:', itemId);
      await deleteItem(itemId);
      console.log('Item deleted successfully');
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error.message);
    }
  };

  const handleEditItem = (itemId) => {
    const selectedItem = data.find((item) => item._id === itemId);
    setFormData(selectedItem);
    setNdata(selectedItem);
   
    setEditingItemId(itemId);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelEdit = () => {
    setShowForm(false);
    setEditingItemId(null);
    setFormData({
      name: '',
      description: '',
      price: 0,
      image: '',
    });
  };

  const buttonStyle = { marginRight: '30px' };

  return (
    <div>
      {showForm ? (
        <UpdateProduct prod={Ndata} />
      ) : (
        data.map((item) => (
          <div
            className="card"
            style={{
              backgroundColor: 'black',
              width: '23rem',
              borderRadius: '20px',
              margin: '5px',
              padding: '15px',
            }}
            key={item._id}
          >
            <img
              src={item.image}
              className="card-img"
              alt={item.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                overflow: 'hidden',
                backgroundColor: 'black',
              }}
            />
            <div
              className="card-body"
              style={{
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
                overflow: 'hidden',
                backgroundColor: 'black',
              }}
            >
              <p>ID: {item._id}</p>
              <h5 className="card-title">Name: {item.name}</h5>
              <p className="card-text">Description: {item.description}</p>
              <p className="card-text">Price: {item.price}</p>
              <a href="#" className="btn btn-primary">
                View Details
              </a>
              <div className="d-flex" style={{ padding: '10px' }}>
                <button
                  className="btn btn-secondary"
                  style={buttonStyle}
                  onClick={() => handleEditItem(item._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteItem(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsGrid;





