import React from 'react'
import './PicText.css'
export default function PicText() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6"  style={{ height: '100vh', border:'none', backgroundColor:'black',}}>
        <img src="https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />   


        </div>
        <div className="col-md-6" style={{backgroundColor:'black',border:'none'}}>
        <div className='produc'>
       
        <div className='text-boxz' style={{backgroundColor:'black',border:'none'}}>
          <h3 className='headi'>Experience </h3>
          <h3 className='late'> Our Exquisite Services</h3>
          <p className='paraa'>Discover a world of tailored solutions and exceptional care, all designed to elevate your experience and exceed your expectations</p>
          <a href=""style={{color:'white'}}>Discover more</a>
          </div>



    </div>
        </div>
      </div>


    </div>
  )
};
