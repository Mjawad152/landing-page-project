import React from 'react'
import './Carosel.css'
  

export default function Carosel() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6"  style={{ height: '100vh', border:'none', backgroundColor:'black',}}>
            <div className='text-box' style={{backgroundColor:'black',border:'none'}}>
          <h3 className='our'>Our</h3>
          <h3 className='latestt'>Latest</h3>
          <p className='para'>Experience the allure of our newest arrivals in antique treasures, where history and elegance converge.</p>
          <a href=""style={{color:'white'}}>Explore Our Latest</a>
          </div>
        </div>
        <div className="col-md-6" style={{backgroundColor:'black',border:'none'}}>
        <div className='produc'>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{overflow:'hidden',height:"700px",width:"800px",objectFit:'cover'}}>
      <img src="https://images.pexels.com/photos/16923176/pexels-photo-16923176/free-photo-of-close-up-of-an-antique-pocket-watch.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" style={{overflow:'hidden',height:"700px",width:"800px",objectFit:'cover'}}>
      <img src="https://images.pexels.com/photos/5673822/pexels-photo-5673822.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item"style={{overflow:'hidden',height:"700px",objectFit:'cover',width:"800px"}}>
      <img src="https://images.pexels.com/photos/15876100/pexels-photo-15876100/free-photo-of-an-antique-envelope-and-a-lighter.jpeg?auto=compress&cs=tinysrgb&w=1600" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually">Next</span>
  </button>
</div>










    </div>
        </div>
      </div>

    
    </div>
    
);
}
    
 