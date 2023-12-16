import React, { useState } from 'react'
import { addData } from '../Services/api.js';

export default function Fpractice() {
  const [value,setValue] = useState({
    firstName:"",
    lastName:"",
    mobNumber:""
  })

  const handleClick = async (e) =>{
    console.log(value)
    e.preventDefault();
    await addData(value);
  }

  const handleChange = (e) =>{

    setValue({ ...value, [e.target.name]: e.target.value });
  }
  return (
    <div className='container'>
      <form>
      <label htmlFor="">First Name</label>
        <input type="text" onChange={handleChange} name='firstName'/>
        <label htmlFor="">Last Name</label>
        <input type="text" onChange={handleChange} name='lastName' />
        <label htmlFor="">Number</label>
        <input type="number"onChange={handleChange} name='mobNumber'  />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}




