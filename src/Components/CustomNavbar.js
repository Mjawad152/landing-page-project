// import React, { useState } from 'react';
// import './CustomNavbar.css';
// import { RiAdminFill } from "react-icons/ri";
// import { FaSearch } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import BackgroundVideo from './BackgroundVideo';
// import Products from './Products';
// import ContentAdver from './ContentAdver';
// import Advertise from './Advertise';
// import TopProduct from './TopProduct';
// import Footer from './Footer';
// import Boutique from '../Boutique';


// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     < div >
//     <div className='mainNav' style={{justifyContent:'space-between'}}>
//     <nav className={`navbar ${menuOpen ? 'open' : ''}`} style={{ backgroundColor: 'transparent',justifyContent:'space-between' }}>
//       <div className="navbar-left">
//       <button className="menu-button" onClick={toggleMenu}>
//           <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
//           <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
//         </button>
//         <Link to="/">Home</Link>
//         <Link to="/about" >About</Link>
//         <Link to="/Shop">Shop</Link>
        
//         <Link to="/contact">Contact</Link>
//       </div>
//       <div className="logo">
//       <img src="https://o.remove.bg/downloads/5823f09c-c0d2-4049-828a-44ab3b8548bd/Untitled__2_-removebg-preview.png" alt="Logo"  />
//       </div>
      
//       <div className="navbar-right">
//       <Link to="/" className='righ' id='ri'>Services</Link>
//       <Link to="/Boutique" className='righ'>Boutiques</Link>
//         <Link to="/AdminDashboard" className="login-button" style={{ color: 'white', fontSize: '1.5em' }}>
//         <RiAdminFill />
//         </Link>
//         <Link className='login-button' style={{ color: 'white', fontSize: '1.5em' }}> 
//         <  FaSearch />
//         </Link>
        
//       </div>
//     </nav>
//     </div>
    
//     <BackgroundVideo/>
//     <Products/>
//     <ContentAdver/>
//    <Advertise/>
//    <TopProduct/>
//     <Boutique/>
//     <Footer/>
// </div>
//   );
// };

// export default Navbar;





import React, { useState, useEffect } from 'react';
import './CustomNavbar.css';
import { RiAdminFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';
import BackgroundVideo from './BackgroundVideo';
import Products from './Carosel';
import ContentAdver from './ContentAdver';
import Advertise from './Advertise';
import TopProduct from './TopProduct';
import Footer from './Footer';
import Boutique from '../Boutique';
import { useCart } from './CartContext';
import PicText from './PicText';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css'
import { IoMdAddCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
  const [navbarTop, setNavbarTop] = useState(0);
  const [navbarBackground, setNavbarBackground] = useState('transparent');
 
  const closeMenu = () => {
    setMenuOpen(false);
  };

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1500) {
        
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  const { cartState } = useCart();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cartState.cartItems.length); 
  }, [cartState.cartItems]);
 

  window.onscroll = function() {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 50) {
      setNavbarBackground('black'); 
    } else {
      setNavbarBackground('black'); 
      
    }
    if (prevScrollpos > currentScrollPos) {
      setNavbarTop('0');
      
    } else {
      setNavbarTop('-120px');
      setNavbarBackground('black');
      
    }
    setPrevScrollpos(currentScrollPos);
  }
  

  return (
    <>
    <div>
      <div className='mainNav' style={{position: 'fixed', top: navbarTop, width: '100%', display: 'block', transition: 'top 0.3s', backgroundColor: navbarBackground}}>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`} style={{ backgroundColor: 'transparent', justifyContent: 'space-between' }}>
          <div className="navbar-left">
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </button>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/Aboutus" onClick={closeMenu}>About</Link>
            <Link to="/Shop" onClick={closeMenu}>Shop</Link>
            <Link to="/Contactus" onClick={closeMenu}>Contact</Link>
          </div>
          <div className="logo-container" >
            <img src={require('../vintage.png')} alt="Logo" style={{width:'367px',height:"230px",}} className="centered-logo"/>
          </div>
          <div className="navbar-right">
            <Link to="/Signup" className='righ'>Sign-Up Now</Link>
            <Link to="/yourcart" className='righ' id='shopcart'> <GiShoppingCart/> <span className="badge text-bg-secondary">{cartCount}</span></Link>
            <Link to="/AdminDashboard" className="login-button" style={{ color: 'white', fontSize: '1.5em' }}>
              <RiAdminFill />
            </Link>
            <Link className='login-button' to="/UserAdd" style={{ color: 'white', fontSize: '1.5em' }}>
              <IoMdAddCircleOutline /> 
            </Link>
          </div>
        </nav>
      </div>
     

   
    </div>
 
    </>
  );
};

export default Navbar;





