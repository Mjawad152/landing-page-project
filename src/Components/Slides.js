import React from 'react'
import './Slides.css';
export default function Slides() {
  return (
    <>
    <div className='fullform'>
    <div className='heading'>
        <h2>Newly Launched Products</h2>
    </div>


    <div className='slide'>
        <div class="card" style={{width: "25rem"}}>
  <img src="https://img.freepik.com/premium-photo/vintage-antique-pocket-watch-background-old-books_564276-9464.jpg?w=2000" class="card-img-top" alt="..."/>
  <div class="card-body">
   <h3> <a class="card-title">1930 Poket Watch</a></h3>
    <p class="card-text">Old Days of Where time caries in Pocket.</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
<div class="card" style={{width: "25rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_E4OlOBffWXgjSfjkj7vOX_aWmYJoxxihEOW3zBCsFBtHMk7d7uCuEGHwUil-BYFPJWU&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3><a class="card-title">Foxy VolsVagen</a></h3>
    <p class="card-text">Classic Foxy Reminds of the old days .</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
<div class="card" style={{width: "25rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYwRozS4s2KAG6aB23eAGRpMnctSt1qXU1FRHHho87U3zl9UIZfBtTrHdHy0QzBlEpDc&usqp=CAU" class="card-img-top" alt="..."/>
  <div class="card-body">
   <h4> <a class="card-title">1888 Kodak Roll Film Camera</a></h4>
    <p class="card-text">Kodak Roll to Capture in Black and White .</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
<div class="card" style={{width: "25rem"}}>
  <img src="https://lighters.pk/wp-content/uploads/2023/02/vintage-classic-lighter.webp" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4><a class="card-title">1960 Vintage Lighter</a></h4>
    <p class="card-text">Rear classic Luxury Lighter to Carry From old Days .</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
    </div>
    </div>

    </>
  )
}
