import React from 'react';
import ReactPlayer from 'react-player';
import './BackgroundVideo.css'
import Products from './Carosel';
import ContentAdver from './ContentAdver';
import Advertise from './Advertise';
import TopProduct from './TopProduct';
import Footer from './Footer';
import Boutique from '../Boutique';
import PicText from './PicText';
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
        <h1>Vintage Items Limited</h1>
        <p>Antique items promotion: Discover the timeless beauty of history with our exquisite collection of meticulously curated antiques.Unlock the allure of the past and adorn your space with unique antique treasures during our exclusive antique items promotion.</p>
        <a href="#" class="discover-button">Discover More</a>

        </div>
      </div>
    </div>
     

    <Products />
      <ContentAdver />
      <Advertise />
      <TopProduct />
      <PicText/>
      <Boutique />
      
      </>
  );
};

export default BackgroundVideo;



