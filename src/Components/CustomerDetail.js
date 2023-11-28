import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import "./CustomerDetail.css"
import { Link } from 'react-router-dom'
import Payment from './Payment'


export default function CustomerDetail() {
  const { cartState } = useCart();
  const [cartItems, setCartItems] = useState(cartState.cartItems);



  useEffect(() => {
    
    cartState.cartItems = cartItems;
  }, [cartItems]);


  return (
    <div>
         <div style={{ float: 'left', width: '70%',}}>
        <h1 className='container' style={{backgroundColor:"antiquewhite",color:"black"}}>Shipping</h1>
      
        <div class="row">
  <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">First Name</label>
  <div class="col-sm-6">
    <input type="text" class="form-control form-control-lg" id="colFormLabelLg" placeholder="John" />
  </div>
</div>


    
        <div class="row">
                <label for="LastName" class="col-sm-2 col-form-label col-form-label-lg">Last Name</label>
                <div class="col-sm-6">
                <input type="text" class="form-control form-control-lg" id="LastName" placeholder="Doe"/>
                </div>
        </div>
        <div class="row">
                <label for="Postalcode" class="col-sm-2 col-form-label col-form-label-lg">Postal Code</label>
                <div class="col-sm-3">
                <input type="text" class="form-control form-control-lg" id="Postalcode" placeholder="12092"/>
                </div>
        </div>
        <div class="row">
                <label for="address1" class="col-sm-2 col-form-label col-form-label-lg">Adress Line #1</label>
                <div class="col-sm-8">
                <input type="number" class="form-control form-control-lg" id="address1" placeholder="Address Line #1"/>
                </div>
        </div>
        <div class="row">
                <label for="address2" class="col-sm-2 col-form-label col-form-label-lg">Address Line #2</label>
                <div class="col-sm-8">
                <input type="email" class="form-control form-control-lg" id="address2" placeholder="Address Line #2"/>
                </div>
        </div>
        
        <div class="row">
                <label for="municipality" class="col-sm-2 col-form-label col-form-label-lg">Address Line #2</label>
                <div class="col-sm-8">
                <input type="email" class="form-control form-control-lg" id="municipality" placeholder="municipality"/>
                </div>
        </div>
        <div class="row">
                <label for="municipality" class="col-sm-2 col-form-label col-form-label-lg">Region/Territory</label>
                <div class="col-sm-8">


                <select class="form-select form-select-sm" aria-label="Small select example">
                   <option selected>Open this select menu</option>
                   <option value="1">One</option>
                   <option value="2">Two</option>
                   <option value="3">Three</option>
                </select>
                </div>
        </div>
        <div class="row">
                <label for="municipality" class="col-sm-2 col-form-label col-form-label-lg">Country/Region</label>
                <div class="col-sm-8">
                <div class="dropdown">
       <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
             Pakistan
          </button>
             <ul class="dropdown-menu">
               <li><a class="dropdown-item" href="#">Us</a></li>
               <li><a class="dropdown-item" href="#">Uk</a></li>
               <li><a class="dropdown-item" href="#">Austrailia</a></li>
             </ul>
        </div>
               
                </div>
        </div>


<div className='container'>
<h4 style={{backgroundColor:"antiquewhite"}}>Delivery Method</h4>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div>









       
                
            <div class="row">
                <label for="Shipping Phone" class="col-sm-2 col-form-label col-form-label-lg" >Shipping Phone </label>
                <div class="col-sm-6">
                <input type="text" class="form-control form-control-lg" id="Shipping Phone" placeholder="111-222-333-444"/>
                </div>
        </div>
        <div class="row">
  <label for="E-mail" class="col-sm-2 col-form-label col-form-label-lg">E-mail</label>
  <div class="col-sm-6">
    <input type="e-mail" class="form-control form-control-lg" id="E-mail" placeholder="user@gmail.com" />
  </div>
</div>

</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Join Antique Items Limited and save your delivery details for Faster Checkout</label>
</div>
  <h6 className='sign'>Already a member?<a href="">Sign In</a></h6>
        
        <div className='container' style={{backgroundColor:"antiquewhite"}}>
        <div class="form-check form-check-inline" >
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
  <label class="form-check-label" for="inlineCheckbox1" >I have read and accepted Antique Items Limited's privacy policy, ensuring the responsible handling of my personal information and data security</label>
</div>
        </div>
        


        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-danger btn-lg" id='billing'><Link to='/Payment' style={{textDecoration:"none",color:"white"}}>Continue to Billing</Link></button>

</div>
      </div>
      
      <div style={{ float: 'left', width: '30%' }}>
       <div className='container' style={{backgroundColor:"antiquewhite"}}>
        <h3>Summary</h3>
       </div>
       <div>
       <div class="row">
                <label for="LastName" class="col-sm-2 col-form-label col-form-label-lg">SUBTOTAL:</label>
                <div class="col-sm-6">
                <p className='pric'> 250$</p>
                </div>
        </div>
        <div class="row">
                <label for="LastName" class="col-sm-2 col-form-label col-form-label-lg">Shipping&Handling:</label>
                <div class="col-sm-6">
                <p className='pric'> 250$</p>
                </div>
        </div>
        <div class="row">
                <label for="LastName" class="col-sm-2 col-form-label col-form-label-lg">Taxes:</label>
                <div class="col-sm-6">
                <p className='pric'> 250$</p>
                </div>
        </div>
        <div class="row">
                <label for="LastName" class="col-sm-2 col-form-label col-form-label-lg">TOTAL:</label>
                <div class="col-sm-6">
                <p className='pric'> 250$</p>
                </div>
        </div>
       </div>
       <div className='container' style={{backgroundColor:"antiquewhite"}}>
        <h3>In Your Cart</h3>
        <div>
        </div>
        
       </div>
       <div class="container mb-3"  style={{maxWidth:"1200px",border:"none"}}>
       {cartState.cartItems.map((item) => (
         <div class="row g-0">
           <div class="col-md-4">
             <img src={item.image} class="img-fluid rounded-start"  style={{height:"100%",width:"100%"}}/>
           </div>
           <div class="col-md-6" style={{border:"1px solid black"}}>
             <div class="card-body" style={{backgroundColor:"white"}}>
               <h5 class="card-title" style={{fontWeight:"bold",color:"black"}}>{item.name}</h5>
               <p class="card-text" style={{fontWeight:"bold",color:"black"}}>{item.description}</p>
               <p className="card-text" style={{fontWeight:"bold",color:"black"}}>{item.price}</p>
               </div>
               </div>
      </div>
    ))}
    </div>
    </div>
    
    </div>
  )
}
