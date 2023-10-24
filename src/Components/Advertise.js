import React from 'react';
import './Advertise.css';
import ReactPlayer from 'react-player';
const Advertise = () => {
  return (
    <div className="full-screen" >
      <div className="center-box" style={{backgroundColor:"black",border:'none'}}>
        
      <div className="video-background" style={{ position: 'relative'}}>
      <ReactPlayer
        url="/background.mp4" 
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="auto"
        playsinline
      />
      </div>


      </div>
      <div className="side-box" style={{ overflow: 'hidden',border:"none" }}>
        <img src="https://images.pexels.com/photos/15258683/pexels-photo-15258683/free-photo-of-variety-of-vintage-coins-and-stamp.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image 1" width="auto" height="auto" />
      </div>
      <div className="side-box"  style={{ overflow: 'hidden',border:"none" }}>
        <img src="https://images.pexels.com/photos/18483756/pexels-photo-18483756/free-photo-of-vintage-items-displayed-in-a-shop.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image 2" width="auto" height="auto"  />
      </div>
      <div className="side-box" style={{ overflow: 'hidden',border:"none" }}>
        <img src="https://images.pexels.com/photos/18127224/pexels-photo-18127224/free-photo-of-assortment-of-vintage-and-antique-items-displayed-on-a-flea-market-stall.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image 3" width="auto" height="auto" />
      </div>
      <div className="side-box" style={{ overflow: 'hidden',border:"none" }}>
        <img src="https://images.pexels.com/photos/10460863/pexels-photo-10460863.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Image 4" width="auto" height="auto" />
      </div>
    </div>
  );
};

export default Advertise;
