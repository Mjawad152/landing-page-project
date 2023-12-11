import React, { useState } from 'react'

export default function Fpractice() {
    const [value, Setvalue] = useState()
    const[item,Setitem]=useState()

    const handleChange = (event) =>{
        Setvalue(event.target.value)
    }
    const handleClick = () =>{
        const list = [...item,value];
        Setitem(list);
    }
  return (
    <div>
        <input type="text"  onChange={handleChange}/>
       <button onClick={handleClick}></button>
    </div>
  )
}
