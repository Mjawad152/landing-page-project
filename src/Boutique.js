import React from 'react'
import './Boutique.css'

export default function Boutique() {
  return (
    <div>

<div className="container-fluid" style={{border:'none'}}>
      <div className="row" style={{border:'none'}}>
        <div className="col-md-6"  style={{ height: '60vh',border:'none' }}>
            <div className='text-box' style={{border:'none'}}>
          <h3 className='headin' style={{color:'black'}}>FIND A</h3>
          <h3 className='latest' style={{color:'black'}}>BOUTIQUE</h3>
          
          <a href="" style={{color:"black"}}>Explore All Boutiques</a>
          </div>
        </div>
<div className='second'>

<img src="https://media.gettyimages.com/id/153643043/photo/customers-in-antique-store.jpg?s=612x612&w=0&k=20&c=Gr6aKj2mqDrR1XQsKc2-d1ovpvYy3Zbjv4qxEULKQXg=" alt="" style={{height:'500px', overflow:'hidden'}}/>


</div>

</div>
</div>

<div className='subscribe'>

<div className="row" style={{width:'100%', height:'100%',border:'none'}}>
  <div className="col-md-6" style={{border:'none'}}>
  <h3 className='headin' style={{fontSize:'x-x-large', color:'black',}}>GET THE <br /></h3>
  <br />
          <h3 className='latest' style={{color:'black'}}> <br />LATEST NEWS</h3>
  </div>
  <div className="col-md-6" style={{border:'none '}}>
  <div className="newsletter">
              <h4 style={{color:'black'}}> Subscribe to our Newsletter</h4>
              <p style={{color:'black'}}>
Be the first to receive the latest news on our brand, products and upcoming events..</p>

  <form>
                <input type="email" placeholder="Enter your email" />
                <button type="submit" style={{margin:'15px', backgroundColor:'black'}}>Subscribe</button>
              </form>

  </div>
</div>
</div>


</div>













    </div>
  )
}