import React from 'react';
import './Advertise.css';
import ReactPlayer from 'react-player';

const Advertise = () => {
  return (
    <div className="full-screen" style={{padding:"5rem"}}>
      <div className="center-box" style={{backgroundColor:"black",}}>
        
      <div className="video" style={{width:"100%",height:"100%",boxSizing:"content-box",overflow:"hidden" }}>
  
    <video
       
        autoPlay
        loop
        muted
        playsInline
        
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
       
      >
        <source src="/backvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     

      </div>


      </div  >
      <div className="side-box" style={{ overflow: 'hidden',border:"none" }}>
        <img src="https://images.pexels.com/photos/15258683/pexels-photo-15258683/free-photo-of-variety-of-vintage-coins-and-stamp.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image 1" width="auto" height="710rem" />
      </div>
      <div className="side-box"  style={{ overflow: 'hidden',border:"none" }}>
        <img src="https://images.pexels.com/photos/18483756/pexels-photo-18483756/free-photo-of-vintage-items-displayed-in-a-shop.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image 2" width="auto" height="710rem"  />
      </div>
      <div className="side-box" style={{ overflow: 'hidden',border:"none" }}>
        <img src="https://images.pexels.com/photos/18127224/pexels-photo-18127224/free-photo-of-assortment-of-vintage-and-antique-items-displayed-on-a-flea-market-stall.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image 3" width="auto" height="710rem" />
      </div>
      <div className="side-box" style={{ overflow: 'hidden',border:"none" }}>
        <img src="https://images.pexels.com/photos/10460863/pexels-photo-10460863.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image 4" width="auto" height="710rem" />
      </div>
    </div>
  );
};

export default Advertise;
