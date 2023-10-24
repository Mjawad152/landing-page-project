import React from 'react'
import './Admin.css';
export default function Admin() {
  return (
    <div className='full'>

<div className="Header">
      
      <div className="row">
        <div className="col-md-12 header" style={{ padding: '40px', height: '200px' }}>
          <h1 className='head'>Admin Dash</h1>
        </div>
      </div>

      {/* Two Columns */}
      <div className="row g-8">
        {/* Left Column */}
        <div className="col-md-3">
        <div className='buttonss'>
            <div className='butt'> <button type="button" class="btn btn-outline-light">Add</button> </div>
            <div className='butt'> <button type="button" class="btn btn-outline-light">View </button> </div>
            <div className='butt'> <button type="button" class="btn btn-outline-light">Delete</button> </div>
            <div className='butt'> <button type="button" class="btn btn-outline-light">Update</button> </div>
       
        
        </div>
        </div>

        {/* right */}
        <div className="col-md-8">
        <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label" style={{color: 'White' }}>First name</label>
    <input type="text" class="form-control" id="validationCustom01"  required/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label" style={{color: 'White' }}>Last name</label>
    <input type="text" class="form-control" id="validationCustom02"  required/>
    <div class="valid-feedback" style={{color: 'White' }}>
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label" style={{color: 'White' }}>Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
      <div class="invalid-feedback" style={{color: 'White' }}>
        Please choose a username.
      </div>
      
    </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label" style={{color: 'White' }}>Password</label >
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label" style={{color: 'White' }}>Conform Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label" style={{color: 'White' }}>State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="" style={{color: 'White' }}>Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback" style={{color: 'White' }}>
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label" style={{color: 'White' }}>Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required/>
    <div class="invalid-feedback" style={{color: 'White' }}>
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
      <label class="form-check-label" for="invalidCheck" style={{color: 'White' }}>
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback" style={{color: 'White' }}>
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
        </div>
      </div>
    </div>
    </div>
  )
}
