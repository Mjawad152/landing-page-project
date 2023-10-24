import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css'
const BackgroundVideo = () => {
  return (
    <>
   
    
   <div className="video-background" style={{ position: 'relative',backgroundColor:"black" }}>
      <ReactPlayer
        url="/background.mp4" 
        playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"
        playsinline
      />

      <div style={{
        position: 'absolute',
        top: '45%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color:'white'
      }}>
        <div className='tex'>
        <h1>Antique Items Limited</h1>
        <p>Antique items promotion: Discover the timeless beauty of history with our exquisite collection of meticulously curated antiques.Unlock the allure of the past and adorn your space with unique antique treasures during our exclusive antique items promotion.</p>
        <a href="#" class="discover-button">Discover More</a>

        </div>
      </div>
    </div>
     
      
      </>
  );
};

export default BackgroundVideo;



