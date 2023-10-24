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
import { Link } from 'react-router-dom';
import BackgroundVideo from './BackgroundVideo';
import Products from './Carosel';
import ContentAdver from './ContentAdver';
import Advertise from './Advertise';
import TopProduct from './TopProduct';
import Footer from './Footer';
import Boutique from '../Boutique';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
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
  }, []);

  return (
    <div>
      <div className='mainNav' style={{ justifyContent: 'space-between' }}>
        <nav className={`navbar ${menuOpen ? 'open' : ''}`} style={{ backgroundColor: 'transparent', justifyContent: 'space-between' }}>
          <div className="navbar-left">
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
              <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
              <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
            </button>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/Shop" onClick={closeMenu}>Shop</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </div>
          <div className="logo">
            <img src="https://o.remove.bg/downloads/5823f09c-c0d2-4049-828a-44ab3b8548bd/Untitled__2_-removebg-preview.png" alt="Logo" />
          </div>
          <div className="navbar-right">
            <Link to="/yourcart" className='righ' id='ri'>Cart</Link>
            <Link to="/Boutique" className='righ'>Boutiques</Link>
            <Link to="/AdminDashboard" className="login-button" style={{ color: 'white', fontSize: '1.5em' }}>
              <RiAdminFill />
            </Link>
            <Link className='login-button' style={{ color: 'white', fontSize: '1.5em' }}>
              <FaSearch />
            </Link>
          </div>
        </nav>
      </div>

      <BackgroundVideo />
      <Products />
      <ContentAdver />
      <Advertise />
      <TopProduct />
      <Boutique />
      <Footer />
    </div>
  );
};

export default Navbar;





