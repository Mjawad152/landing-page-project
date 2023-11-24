import React, { useState } from 'react';

function StaticNavbar() {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [navbarTop, setNavbarTop] = useState(0);

  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNavbarTop('0');
    } else {
      setNavbarTop('-50px');
    }
    setPrevScrollpos(currentScrollPos);
  }

  return (
    <>
      <div id="navbar" style={{backgroundColor: '#333', position: 'fixed', top: navbarTop, width: '100%', display: 'block', transition: 'top 0.3s'}}>
        <a href="#home" style={{float: 'left', display: 'block', color: '#f2f2f2', textAlign: 'center', padding: '15px', textDecoration: 'none', fontSize: '17px'}}>Home</a>
        <a href="#news" style={{float: 'left', display: 'block', color: '#f2f2f2', textAlign: 'center', padding: '15px', textDecoration: 'none', fontSize: '17px'}}>News</a>
        <a href="#contact" style={{float: 'left', display: 'block', color: '#f2f2f2', textAlign: 'center', padding: '15px', textDecoration: 'none', fontSize: '17px'}}>Contact</a>
      </div>

   
    </>
  );
}

export default StaticNavbar;
