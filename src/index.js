// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { TopSellersProvider } from "./Components/TopSellersContext";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
  
// );




// reportWebVitals();



// import React from 'react';
// import ReactDOM from 'react-dom'; // Import ReactDOM from "react-dom"
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { TopSellersProvider } from "./Components/TopSellersContext";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <TopSellersProvider> 
//       <App />
//     </TopSellersProvider>
//   </React.StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "./Components/CartContext"; 
import { TopSellersProvider } from "./Components/TopSellersContext";
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <TopSellersProvider>
      <App />
      </TopSellersProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


