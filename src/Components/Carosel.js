import React from 'react'
import './Carosel.css';
import TopProduct from './TopProduct';
import ContentAdver from './ContentAdver';
import Advertise from './Advertise';

export default function Carosel() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6"  style={{ height: '100vh', border:'none', backgroundColor:'black',}}>
            <div className='text-box' style={{backgroundColor:'black',border:'none'}}>
          <h3 className='headin'>Our</h3>
          <h3 className='latest'>Latest</h3>
          <p className='para'>Experience the allure of our newest arrivals in antique treasures, where history and elegance converge.</p>
          <a href=""style={{color:'white'}}>Explore Our Latest</a>
          </div>
        </div>
        <div className="col-md-6" style={{backgroundColor:'black',border:'none'}}>
        <div className='produc'>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{overflow:'hidden',height:"700px",objectFit:'cover'}}>
      <img src="https://images.pexels.com/photos/4463920/pexels-photo-4463920.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" style={{overflow:'hidden',height:"700px",objectFit:'cover'}}>
      <img src="https://images.pexels.com/photos/5673822/pexels-photo-5673822.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item"style={{overflow:'hidden',height:"700px",objectFit:'cover'}}>
      <img src="https://images.pexels.com/photos/18483756/pexels-photo-18483756/free-photo-of-vintage-items-displayed-in-a-shop.jpeg?auto=compress&cs=tinysrgb&w=800" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>










    </div>
        </div>
      </div>

      {/* <TopProduct/> */}
      {/* <ContentAdver/> */}
      {/* <Advertise/> */}
    </div>
    
);
}
    
 