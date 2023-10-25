// import React from 'react'
// import "./ProductsGrid.css"
// import { top_sellers } from './TopProduct'; 

// export default function ProductsGrid() {
//     const buttonStyle = { marginRight: '30px' };



//   return (

//       <div>
//     {top_sellers.map((product) => (

// <div class="card" style={{width: "18rem"}}>
   
// <img
//           src={product.imageUrl}
//                  className="card-img"
//                  alt={product.name}
//                  style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px',overflow:'hidden',backgroundColor:"black", }}/>
//   <div className="card-body" style={{borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px',overflow:'hidden',backgroundColor:"black",}}>
//     <h5 class="card-title">Name: {product.name}</h5>
//     <p class="card-text">Description:{product.description}</p>
//     <p className="card-text">Price: {product.price}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//     <div class="d-flex" style={{padding:"10px",}}>
//     <button class="btn btn-secondary " style={buttonStyle}>Edit</button>
//     <button class="btn btn-danger" >Delete</button>
//     </div>
//   </div>
// </div>




// ))}


//     </div>
//   )
// }












// import React, { useState } from 'react';
// import './ProductsGrid.css';
// import { useTopSellers } from "./TopSellersContext";



// export default function ProductsGrid() {
//   const buttonStyle = { marginRight: '30px' };

 
//   const [products, setProducts] = useState(top_sellers);

 


//   const removeProduct = (id) => {
//     const updatedProducts = products.filter((product) => product.id !== id);
//     setProducts(updatedProducts);
//   };

  


//   const addProduct = () => {
//     const newProduct = {
//       id: products.length + 1,
//       name: "New Productis added",
//       description: "Description can be written here ",
//       price: "$0",
//       imageUrl: "",
//     };

//     setProducts([...products, newProduct]);
//   };

//   return (
//     <div>
//       {products.map((product) => (
//         <div class="card" style={{ width: "18rem" }}>
//           <img
//             src={product.imageUrl}
//             className="card-img"
//             alt={product.name}
//             style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', overflow: 'hidden', backgroundColor: "black" }}
//           />
//           <div className="card-body" style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', overflow: 'hidden', backgroundColor: "black" }}>
//           <p>ID:{product.id}</p>
//             <h5 class="card-title">Name: {product.name}</h5>
//             <p class="card-text">Description: {product.description}</p>
//             <p className="card-text">Price: {product.price}</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//             <div class="d-flex" style={{ padding: "10px" }}>
//               <button class="btn btn-secondary " style={buttonStyle}>Edit</button>
//               <button class="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button>
//             </div>
//           </div>
//         </div>
//       ))}
     
//       <button class="btn btn-primary" onClick={addProduct}>Add Product</button>
//     </div>
//   );
// }
















import React, { useState, useEffect } from 'react';

import './ProductsGrid.css';
import { useTopSellers } from "./TopSellersContext";

export default function ProductsGrid() {
  const buttonStyle = { marginRight: '30px' };
  const { topSellers } = useTopSellers();
  const [products, setProducts] = useState(topSellers);

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Product",
      description: "",
      price: "$900",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOhG8aLPgHwsLoxSGZ3iqJ8-ymaFlHIrjag&usqp=CAU",
    };

    setProducts([...products, newProduct]);
  };
  // useEffect(() => {
  //   const savedProducts = localStorage.getItem('products');
  //   if (savedProducts) {
  //     setProducts(JSON.parse(savedProducts));
  //   }
  // }, []);

  // Save products to Local Storage whenever products change
  // useEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(products));
  // }, [products]);

  return (
    <div>
      {products.map((product) => (
        <div
        className="card"
        style={{backgroundColor:"black", width: "23rem",borderRadius: "20px",margin: "5px",padding: "15px",}} key={product.id}>
          <img
            src={product.imageUrl}
            className="card-img"
            alt={product.name}
            style={{width: '100%',height: '200px',objectFit: 'cover',borderTopLeftRadius: '15px',borderTopRightRadius: '15px',overflow: 'hidden',backgroundColor: "black",}}/>
          <div className="card-body" style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px', overflow: 'hidden', backgroundColor: "black" }}>
            <p>ID: {product.id}</p>
            <h5 className="card-title">Name: {product.name}</h5>
            <p className="card-text">Description: {product.description}</p>
            <p className="card-text">Price: {product.price}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            <div className="d-flex" style={{ padding: "10px" }}>
              <button className="btn btn-secondary" style={buttonStyle}>Edit</button>
              <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}

      <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
    </div>
  );
}








