// import React from "react";
// import './TopProduct.css'
// import { Link } from "react-router-dom";

//   export const top_sellers = [
//         {
//             id: 1,
//             name: "Product 1",
//             description: "Description for Product 1",
//             price: "$25.00",
//             imageUrl: "https://img.freepik.com/premium-photo/front-view-generic-brandless-moder-car_110488-502.jpg",
//           },
//           {
//             id: 2,
//             name: "Product 2",
//             description: "Description for Product 2",
//             price: "$30.00",
//             imageUrl: "https://images.pexels.com/photos/18483756/pexels-photo-18483756/free-photo-of-vintage-items-displayed-in-a-shop.jpeg?auto=compress&cs=tinysrgb&w=1600",
//           },
//           {
//             id: 3,
//             name: "Patio bar set",
//             description: "vidaXL 3 Piece Bistro   ",
//             price: "$2650.00",
//             imageUrl: "https://images.pexels.com/photos/18480226/pexels-photo-18480226/free-photo-of-antique-chair-in-a-living-room.jpeg?auto=compress&cs=tinysrgb&w=1600",
//           },
//           {
//             id: 4,
//             name: "Wintage Pocket Watch",
//             description: "vidaXL 3 Piece Bistro ",
//             price: "$2650.00",
//             imageUrl: "https://images.pexels.com/photos/18506943/pexels-photo-18506943/free-photo-of-vintage-pocket-watch.jpeg?auto=compress&cs=tinysrgb&w=1600",
//           },
//           {
//             id: 5,
//             name: "Wintage Pocket Watch",
//             description: "vidaXL 3 Piece Bistro   ",
//             price: "$2650.00",
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhQJpEm9Drm_6szFxrVFDOBZyE_iD_tBNcA&usqp=CAU",
//           },
//           {
//             id: 6,
//             name: "Product 1",
//             description: "Description for Product 1",
//             price: "$25.00",
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI5vO1UxoThdF4r8Vik-MtBsmmXXVktPDY_w&usqp=CAUhttps://img.freepik.com/premium-photo/front-view-generic-brandless-moder-car_110488-502.jpg",
//           },
//           {
//             id: 7,
//             name: "Product 2",
//             description: "Description for Product 2",
//             price: "$30.00",
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRztew5YEdcVODCgC31Keogy22O79Cq8wLBg&usqp=CAU",
//           },
//           {
//             id: 8,
//             name: "Patio bar set",
//             description: "vidaXL 3 Piece Bistro   ",
//             price: "$2650.00",
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTITGjN7QRGLYMdViauf0inqBJIkNZrPuymQ&usqp=CAU",
//           },
//           {
//             id: 9,
//             name: "Wintage Pocket Watch",
//             description: "vidaXL 3 Piece Bistro   ",
//             price: "$2650.00",
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PCPQTsmnKDGdILHA22yxjFN7GsxRPv7jFQ&usqp=CAU",
//           },
//           {
//             id: 10,
//             name: "Wintage Pocket Watch",
//             description: "vidaXL 3 Piece Bistro   ",
//             price: "$2650.00",
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VwqXxAbM5XK03h3hBr8o5TUSFOBNs3sNWQ&usqp=CAU",
//           },
//           {
//             id: 11,
//             name: "Wintage Pocket Watch",
//             description: "vidaXL 3 Piece Bistro   ",
//             price: "$2650.00",
//             imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4VwqXxAbM5XK03h3hBr8o5TUSFOBNs3sNWQ&usqp=CAU",
//           },
//     ];



//     function TopProduct() {

   

//     return (


      
//         <div style={{backgroundColor:'black',}}>

// <h2 className="product-heading">Top Sellers</h2>

//             {
//                top_sellers.map( (product) => 
//                <div className="card" style={{ backgroundColor:"black", width: "23rem", height: '17rem',borderRadius:'20px',margin:'5px',padding:'15px' ,}} key={product.id}>
//                <img
//                  src={product.imageUrl}
//                  className="card-img"
//                  alt={product.name}
//                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px',overflow:'hidden',backgroundColor:"black", }}
//                />
//                <div>
//                <div className="card-body" style={{borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px',overflow:'hidden',backgroundColor:"black",}}>
//                 <p>id:{product.id}</p>
//                  <h5 className="card-title">{product.name}</h5>
//                  <p className="card-text">{product.description}</p>
//                  <p className="card-text">Price: {product.price}</p>
//                  <a href="#" className="btn btn-primary">
//                    Buy Now
//                  </a>
//                  <Link to="/path" style={{ margin: '10px', padding: '5px' }} className="btn btn-danger">Add To CART</Link>
//                </div>
//              </div>
//              </div>

//                ) 
//             }

        
//         </div>
//     );
// }

// export default TopProduct;

















// import React from "react";
// import "./TopProduct.css";
// import { Link } from "react-router-dom";
// import { useTopSellers } from "./TopSellersContext";

// function TopProduct() {
//   const { topSellers } = useTopSellers();

//   return (
//     <div style={{backgroundColor:"black"  }}>
//       <h2 className="heading">Top Sellers</h2>

//       {topSellers.map((product) => (
//         <div
//           className="card"
//           style={{backgroundColor:"black", width: "23rem",height: "17rem",borderRadius: "20px",margin: "5px",padding: "15px",}} key={product.id}>
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             style={{ width: "100%", height: "100%", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px", overflow: "hidden", }} />
          
//           <div>
//             <div
//               className="card-body"
//               style={{borderBottomLeftRadius: "15px",borderBottomRightRadius: "15px",overflow: "hidden",
              
//               }}
//             >
//               <p>id:{product.id}</p>
//               <h5 className="card-title">Name:{product.name}</h5>
//               <p className="card-text">Desription:{product.description}</p>
//               <p className="card-text">Price: {product.price}</p>
//               <a href="#" className="btn btn-primary">
//                 Buy Now
//               </a>
//               <Link
//                 to="/path"
//                 style={{ margin: "10px", padding: "5px" }}
//                 className="btn btn-danger"
//               >
//                 Add To CART
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TopProduct;





// import React from "react";
// import "./TopProduct.css";
// import { Link } from "react-router-dom";
// import { useCart } from "./CartContext"; // Import the CartContext
// import { useTopSellers } from "./TopSellersContext";

// function TopProduct() {
//   const { cartState, dispatch } = useCart(); // Get cart state and dispatch function

//   const addToCart = (product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product }); 
//     dispatch({ type: "UPDATE_CART_COUNT", payload: cartState.cartItems.length + 1 });
//   };


  
//   const { topSellers } = useTopSellers();

//   return (
//     <div style={{ backgroundColor: "black" }}>
//       <h2 className="heading">Top Sellers</h2>

//       {topSellers.map((product) => (
//         <div
//           className="card"
//           style={{
//             backgroundColor: "black",
//             width: "23rem",
//             height: "17rem",
//             borderRadius: "20px",
//             margin: "5px",
//             padding: "15px",
//           }}
//           key={product.id}
//         >
//           <img
//             src={product.imageUrl}
//             alt={product.name}
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               borderTopLeftRadius: "15px",
//               borderTopRightRadius: "15px",
//               overflow: "hidden",
//             }}
//           />

//           <div>
//             <div
//               className="card-body"
//               style={{
//                 borderBottomLeftRadius: "15px",
//                 borderBottomRightRadius: "15px",
//                 overflow: "hidden",
//               }}
//             >
//               <p>id:{product.id}</p>
//               <h5 className="card-title">Name:{product.name}</h5>
//               <p className="card-text">Desription:{product.description}</p>
//               <p className="card-text">Price: {product.price}</p>
//               <a href="#" className="btn btn-primary">
//                 Buy Now
//               </a>
//               <button
//                 onClick={() => addToCart(product)}
//                 style={{ margin: "10px", padding: "5px" }}
//                 className="btn btn-danger"
//               >
//                 Add To CART
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TopProduct;










import React, { useState,useEffect } from "react";
import "./TopProduct.css";
import { useCart } from "./CartContext";
import { useTopSellers } from "./TopSellersContext";

function TopProduct() {
  const { addToCart } = useCart(); 
  const { topSellers } = useTopSellers();
 
  const handleAddToCart = (product) => {
    addToCart(product);
  };

 

  return (
    <div style={{ backgroundColor: "black" }}>
      <h2 className="heading">Top Sellers</h2>

      {topSellers.map((product) => (
        <div
          className="card"
          style={{backgroundColor: "black",width: "23rem",height: "17rem",borderRadius: "20px",margin: "5px",padding: "15px",}} key={product.id}>


          <img src={product.imageUrl}alt={product.name}style={{width: "100%",height: "100%",objectFit: "cover",borderTopLeftRadius: "15px",borderTopRightRadius: "15px",overflow: "hidden",}}/>

          <div>
            <div className="card-body" style={{borderBottomLeftRadius: "15px",borderBottomRightRadius: "15px",overflow: "hidden",}}>
              <p>id: {product.id}</p>
              <h5 className="card-title">Name: {product.name}</h5>
              <p className="card-text">Description: {product.description}</p>
              <p className="card-text">Price: {product.price}</p>
              <a href="#" className="btn btn-primary">
                Buy Now
              </a>
          <button onClick={() => handleAddToCart(product)} style={{ margin: "10px", padding: "5px" }} className="btn btn-danger">
            Add To Cart
          </button>
        </div>
        </div>
        </div>
      ))}
    </div>
  );
}

export default TopProduct;
