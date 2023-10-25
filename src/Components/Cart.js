import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";

function Cart() {
  const { cartState } = useCart();
  const [cartItems, setCartItems] = useState(cartState.cartItems);

 
  const removeProduct = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  }

  useEffect(() => {
    
    cartState.cartItems = cartItems;
  }, [cartItems]);


  


  
  return (
  
    <div  style={{ backgroundColor: "black", minHeight: "100vh" }} >
      <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
  <h2 style={{color:"white"}}>Shopping Cart</h2>

  <label htmlFor="count" style={{color:"white",fontSize:"large"}}>Total Added Items</label>
  <span className="count" style={{color:"white"}}>{cartItems.length}</span>
  <p style={{color:"white"}}>{cartState.message}</p>
</div>

        {cartState.cartItems.map((item, index) => (

         <div class="container mb-3"  style={{maxWidth:"1200px"}}>
         <div class="row g-0">
           <div class="col-md-4">
             <img src={item.imageUrl} key={index} class="img-fluid rounded-start" alt={item.name} style={{height:"100%",width:"100%"}}/>
           </div>
           <div class="col-md-6" style={{backgroundColor:"black"}}>
             <div class="card-body">
               <h5 class="card-title" style={{fontWeight:"bold"}}>Name:{item.name}</h5>
               <p class="card-text" style={{fontWeight:"bold"}}>Description:{item.description}</p>
               <p className="card-text" style={{fontWeight:"bold"}}>Price: {item.price}</p>
               <button className="btn btn-danger" onClick={() => removeProduct(item.id)}>Delete</button>
             </div>
           </div>
         </div>
       </div>
          

        ))}
      
    </div>
   
  );
}

export default Cart;

