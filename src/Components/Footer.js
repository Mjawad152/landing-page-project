import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
   <>
    <footer className="footer" >
      <div className="container" >
        <div className="row" style={{border:'none'}}>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>
              Phone: (+92) 309-0637497 <br />
              Email: MuhammadJawadIqbal5@gmail.com <br />
              Address: Chak 152NB , Sillanwali,Sargodha
            </p>
          </div>
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>
              Welcome to Your Antique Store! We specialize in rare and
              exquisite antique items with a rich history.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/">Facebook</a>
              <a href="https://www.instagram.com/">Instagram</a>
              <a href="https://twitter.com/">Twitter</a>
              
            </div>
          </div>
        </div>
        <div className="row" style={{border:'none'}}>
          <div className="col-md-12 text-center">
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/shop">Shop</a>
              <a href="/about">About Us</a>
              <a href="/blog">Blog</a>
              <a href="/faqs">FAQs</a>
            </div>
          </div>
        </div>
       
        <div className="row" style={{border:'none'}}>
          <div className="col-md-12 text-center">
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Antique Items Limited. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </> 
  );
};

export default Footer;
