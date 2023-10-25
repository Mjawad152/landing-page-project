// // CartContext.js
// import React, { createContext, useContext, useReducer } from "react";

// const CartContext = createContext();

// const initialState = {
//   cartItems: [],
//   message: "No Item Added To Cart.Go to Product Section TO Buy",
// };

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const newItem = action.payload;
//       const updatedCart = [...state.cartItems, newItem];
//       return { ...state, cartItems: updatedCart, message: "Item added to cart!" };
//     default:
//       return state;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cartState, dispatch] = useReducer(cartReducer, initialState);

//   return (
//     <CartContext.Provider value={{ cartState, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };



import React, { createContext, useContext,  } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  message: "No Item Added To Cart. Go to Product Section TO Buy",
};


export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = React.useState(initialState);

  const addToCart = (newItem) => {
    setCartState((prevState) => ({
      ...prevState,
      cartItems: [...prevState.cartItems, newItem],
      message: "Item added to cart!",
    }));
  };
  


  
  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
 
  return context;
};

