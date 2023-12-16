import React, { useState } from 'react';
import './Signup.css';
import signupImage from '../signup.png';
import { signup } from '../Services/api';

const Signup = () => {
 
const onChange=(e)=>{
  setformdata({...formdata,[e.target.name]:e.target.value});
  console.log(formdata);
}

  const[formdata,setformdata]=useState(
    {
      firstName:"",
      lastName :"",
      email:"",
      phoneNumber:"",
      password:"",
      retypedPassword:"",
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formdata.firstName || !formdata.lastName || !formdata.email || !formdata.password || !formdata.retypedPassword) {
      alert('Please fill out all required fields.');
      return;
    }

    if (formdata.password !== formdata.retypedPassword) {
      alert('Passwords do not match.');
      return;
    }
    signup(formdata);

  };

  return (
    <div
      style={{
        backgroundImage: `url(${signupImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        height: '100vh',
        marginTop:"130px"
      }}
    >
      
      <div
        style={{
          flex: '0.3',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
       
        }}
      >
        <h3 style={{color:"white"}}>Heading Here</h3>
        <button style={{ padding: '20px', fontSize: '20px' }}>Login</button>
      </div>

      
      <div
        style={{
          flex: '1',
          position: 'relative',
          overflow: 'hidden', 
        }}
      >
        <div
          className="signup-form"
          style={{
            
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            border: '1px solid #ccc',
            padding: '10rem',
            backgroundColor: '#fff',
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formdata.firstName}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formdata.lastName}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formdata.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number (Optional):</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formdata.phoneNumber}
                onChange={onChange}
              />
            </div>

           

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formdata.password}
                onChange={onChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="retypedPassword">Re-type Password:</label>
              <input
                type="password"
                id="retypedPassword"
                name="retypedPassword"
                value={formdata.retypedPassword}
                onChange={onChange}
                required
              />
            </div>

            <div className="checkbox">
              <input type="checkbox" id="termsAndConditions" name="termsAndConditions" required />
              <label htmlFor="termsAndConditions">
                I agree to the Terms and Conditions and Privacy Policy.
              </label>
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  
  );
};

export default Signup;
