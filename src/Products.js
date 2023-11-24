import React from 'react'

import { top_sellers } from './TopProduct'; 

export default function Products() {
    const buttonStyle = { marginRight: '30px' };



  return (

      <div>


    {top_sellers.map((product) => (

<div class="card" style={{width: "18rem"}}>
   
<img
          src={product.imageUrl}
                 className="card-img"
                 alt={product.name}
                 style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px',overflow:'hidden',backgroundColor:"black", }}/>
  <div className="card-body" style={{borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px',overflow:'hidden',backgroundColor:"black",}}>
    <h5 class="card-title">Name: {product.name}</h5>
    <p class="card-text">Description:{product.description}</p>
    <p className="card-text">Price: {product.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    <div class="d-flex" style={{padding:"10px",}}>
    <button class="btn btn-secondary " style={buttonStyle}>Edit</button>
    <button class="btn btn-danger" >Delete</button>
    </div>
  </div>
</div>




))}


    </div>
  )
}
