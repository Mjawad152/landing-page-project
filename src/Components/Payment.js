import React from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom'
export default function Payment() {
  return (
    <div>
         <div className="container">
      <div className="row mb-5">
        <div className="col-12" style={{ height: '200px',display:"flex",justifyContent:"space-between"}}>
       <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9xdgGckJap4fRAzBNGp-6gr4u3ARPg_IhQ&usqp=CAU" alt="" style={{maxHeight:"200px",width:"auto",border:"1px solid black",cursor:'pointer',  objectFit:"cover",objectPosition:"center center"}} /></div>
       <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzgpYhjzFdpXZQZKtPM7dwVtZX78rcIKAGw&usqp=CAU" alt=""style={{maxHeight:"200px",width:"auto",  border:"1px solid black",cursor:'pointer', objectFit:"cover",objectPosition:"center center"}} /></div>
       <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoJoYtHhrpZhV0xO6BKgxHoT7Zi2fzEeEfg&usqp=CAU" alt="" style={{maxHeight:"200px",width:"auto", border:"1px solid black",cursor:'pointer', objectFit:"cover",objectPosition:"center center"}}/></div>
        </div>
      </div>

      {/* Lower Half Divided into Two Columns */}
      <div className="row" >
        <div className="col-md-6 " style={{display:"block",border:"none",padding:"2rem" }}>
       <h3>Billing info</h3>
       <div class="mb-2" >
      <label for="Full Name" class="form-label">Full Name</label>
      <input type="text" class="form-control" id="Full Name" placeholder="Enter Full Name" />
    </div>
      
    <div class="mb-2" >
      <label for="Billing Address" class="form-label">Billing Address</label>
      <input type="text" class="form-control" id="Billing Address" placeholder="Enter Billing Address" />
    </div>
    <div class="row mb-2">
  <div class="col-sm-6">
    <label for="City" class="form-label">City</label>
    <input type="text" class="form-control" id="City" placeholder="Sargodha" />
  </div>
  <div class="col-sm-6">
    <label for="ZipCode" class="form-label">Zip Code</label>
    <input type="text" class="form-control" id="ZipCode" placeholder="40011" />
  </div>
</div>

    <div class="mb-2">
      <label for="form-select" class="form-label">Country</label>
      <select class="form-select" aria-label="Default select example">
  <option selected>Pakistan</option>
  <option value="1">Austrailia</option>
  <option value="2">Dubai</option>
  <option value="3">America</option>
</select>
    </div>
  

        






        </div>
        <div className="col-md-6 " style={{display:"block",border:"none",padding:"2rem"}}>
          <h3>CardHolder's Name</h3>
          <div class="mb-2" >
      <label for="CardHolder's Name" class="form-label">Full Name</label>
      <input type="text" class="form-control" id="CardHolder's Name" placeholder="John Doe" />
    </div>
      
    <div class="mb-2" >
      <label for="Billing Address" class="form-label">Card Number</label>
      <input type="text" class="form-control" id="Card Number" placeholder="Enter Card Number" />
    </div>
    <div class="row mb-2">
  <div class="col-sm-6">
    <label for="Expiry Month" class="form-label">Expiry Month</label>
    <select class="form-select" aria-label="Default select example">
  <option selected>12</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
</select>
  </div>
  <div class="col-sm-6">
    <label for="ZipCode" class="form-label">EXP YEAR</label>
    <select class="form-select" aria-label="Default select example">
  <option selected>2023</option>
  <option value="1">2024</option>
  <option value="2">2025</option>
  <option value="3">2026</option>
  <option value="4">2027</option>
  <option value="5">2028</option>
  <option value="6">2029</option>
  <option value="7">2030</option>
  <option value="8">2031</option>
  <option value="9">2032</option>
  <option value="10">2033</option>
  <option value="11">2034</option>
  <option value="12">2035</option>
</select>
  </div>
</div>

    <div class="mb-2">
      <label for="CVC Number" class="form-label">CVC Number</label>
      <input type="text" class="form-control" id="CVC Number" placeholder="468" />
    </div>
        </div>
      </div>
      <button type="button" class="btn btn-outline-secondary" id='backto' style={{marginTop:"5rem"}}> <Link to='/' style={{textDecoration:"none",color:"antiqewhite"}}>Back to Home</Link> </button>
      <div class="d-flex justify-content-end" >
  <Link to='/Cart' type="button" class="btn btn-outline-primary" id='proceed'  style={{marginRight:"6rem",border:"none"}}>Back TO Cart</Link>
  <button type="button" class="btn btn-outline-primary" id='proceed'>PROCEED</button>
</div>

    </div>
    </div>
  )
}
