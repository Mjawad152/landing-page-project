
import React, { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";  // Add this line



function Cart() {
  const { cartState } = useCart();  // If you have a useCart hook, import and use it here
  const [cartItems, setCartItems] = useState(cartState.cartItems);

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    // Update cartState.cartItems or perform any other side effects as needed
  }, [cartItems, cartState.cartItems]);

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh",marginTop:"130px" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h2 style={{ color: "white" }}>Shopping Cart</h2>
        <label htmlFor="count" style={{ color: "white", fontSize: "large" }}>Total Added Items</label>
        <span className="count" style={{ color: "white" }}>{cartState.cartItems.length}</span>
        <p style={{ color: "white" }}>{cartState.message}</p>
      </div>

      {cartState.cartItems.map((item) => (
        <div className="container mb-3" style={{ maxWidth: "1200px" }} key={item._id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.image} className="img-fluid rounded-start" alt={item.name} style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="col-md-6" style={{ backgroundColor: "black" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ fontWeight: "bold" }}>Name: {item.name}</h5>
                <p className="card-text" style={{ fontWeight: "bold" }}>Description: {item.description}</p>
                <p className="card-text" style={{ fontWeight: "bold" }}>Price: {item.price}</p>
                <button className="btn btn-danger"  onClick={() => removeFromCart(item.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary"><Link to="/CustomerDetail" style={{ color: "white", textDecoration: "none" }}>Check out</Link></button>
      </div>
    </div>
  );
}

export default Cart;
