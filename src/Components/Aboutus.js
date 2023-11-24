import React from 'react'
import {useEffect} from 'react'
import ceoImage from '../ceopic.jpg';
import './Aboutus.css'
export default function Aboutus() {
  window.scrollTo(0, 0);
  return (
    <div >
    <div style={{height:"600px",overflow:"hidden"}}>
        <img
        src='https://images.pexels.com/photos/13883386/pexels-photo-13883386.jpeg?auto=compress&cs=tinysrgb&w=1600'
       
       
       style={{ objectFit: "cover",objectPosition:"bottom", width: "100%", height: "100vh" }}
      
    
     />
     <div style={{
        width:"500px",
       
        position: 'absolute',
        bottom: '35%',
        left: 'auto',
        right: '5%',
        transform: 'translate(-50%, -50%)',
        textAlign:"center",
        color:'White',
    
        padding:"10px"
      }}>
      
        <div className='text'>
          <h1> About <br />Antique Items Limited</h1>
     
      </div>
      </div>
    </div>
    <div className='container' style={{width:"800px",marginTop:"8rem"}}>
        <h2 className='text-center' id='text' >Mission Statement</h2>
        <p className="paragrahh">At Vintage Items Limited, we embark on a journey to bridge the gap between history and modernity, cherishing the allure of yesteryears in every carefully chosen artifact. Our mission is rooted in the belief that each vintage item tells a story, capturing the essence of bygone eras and preserving the craftsmanship of times gone by. We curate a diverse and unique collection that reflects the elegance, craftsmanship, and enduring quality of vintage pieces, ensuring that our customers experience the magic of nostalgia with every acquisition.</p>

          <p className="paragrahh">Driven by a passion for authenticity and a commitment to sustainability, Vintage Items Limited aims to provide a haven for those who appreciate the character and soul embedded in every vintage find. Our mission extends beyond commerce; it is a dedication to fostering a community that values the cultural and historical significance of each item. Through our curated selection, we invite you to embark on a journey through time, where the past becomes present, and vintage finds become timeless treasures for generations to come.</p>
    </div>
    <div className='container' style={{display:"flex",marginTop:"10rem"}}>
        <div className='text'>
            <h2 className="head2">Chaudhary Jawad Chadhar</h2>
            <h3 className='found'>FOUNDER AND CHAIRMAN OF ANTIQUE ITEMS LIMITED</h3>
            <p className="paragrahh">In the picturesque landscapes of my rural origins, amidst the simplicity of village life, I, Chaudhary Jawad, discovered a deep-rooted appreciation for the historical treasures that adorned our family estate. As a scion of a long line of landlords, the allure of antique items became an inherent part of my identity. However, destiny had different plans, leading me to the bustling city of Abbottabad, where I embarked on a journey in computer science at COMSATS University. This transition from village life to the world of technology ignited a passion within me to bridge the gap between tradition and modernity, giving birth to the concept of Vintage Items Limited.</p>
            <p className="paragrahh">Vintage Items Limited is not merely a website; it's a manifestation of my commitment to cultural preservation and accessibility. Inspired by my own journey, I envisioned a platform that would transcend geographical boundaries, connecting enthusiasts with the authenticity of original antique items. Through this digital haven, I strive to offer a curated collection that echoes the stories of bygone eras, enriching the lives of those who seek a piece of history. In the vast expanse of the digital realm, Vintage Items Limited stands as a testament to the harmonious blend of heritage and technology, fostering an appreciation for the beauty of the past in the hearts of a global audience.</p>
            <p className="paragrahh">At the heart of Vintage Items Limited lies a sincere desire to provide a valuable service to the discerning minds eager to unearth the magic of antiquity. My journey from the fields of my village to the corridors of COMSATS has instilled in me a profound understanding of the transformative power of education and exposure. Vintage Items Limited, beyond its role as an e-commerce platform, is a conduit for education, discovery, and community building. It's a humble offering to those who share my passion for the exquisite craftsmanship and untold stories encapsulated within each vintage piece. Together, let us embark on a timeless exploration of history, where the past and the present harmonize to create a legacy for generations to come.</p>
        </div>
        <div>
            <img src={ceoImage} alt="" />
        </div>
    </div>
    <div className='container' style={{display: "flex", justifyContent: "center", alignItems: "center", height: "90vh"}}>
        <div className='container'style={{display:"block"}}>
            <img src="https://images.pexels.com/photos/1448709/pexels-photo-1448709.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" style={{width:"600px"}}/>
        </div>
        <div className='text-start container'>
            <h2 className="head2">WHAT WE STAND FOR</h2>
            <p className="paragrahh">At Vintage Items Limited, our core values form the bedrock of our mission, steering our endeavors towards a higher purpose. Integrity and authenticity are the pillars upon which we stand, ensuring that every item featured on our platform is a genuine piece of history. We are committed to meticulous curation, verifying the origin and historical significance of each antique item, so our patrons can trust the stories they bring into their homes.</p>
            <p className="paragrahh">Beyond the pursuit of profit, we champion sustainability in the world of vintage and antique collecting. By fostering an appreciation for pre-owned items, we contribute to a more eco-friendly approach to consumption. Vintage Items Limited believes in the longevity of quality craftsmanship, encouraging a shift away from disposable culture towards a sustainable lifestyle. Our commitment to environmental responsibility echoes our dedication to creating a positive impact on the world, one cherished artifact at a time.</p>
            <p className="paragrahh">In the spirit of inclusivity, Vintage Items Limited is more than a marketplace; it's a community that celebrates diversity and shared passions. We strive to create a space where collectors, enthusiasts, and novices alike can come together to exchange knowledge, stories, and a profound love for the artistry of the past. Vintage Items Limited is not just a destination for acquiring timeless pieces; it's a sanctuary where individuals with a shared appreciation for history and culture can connect, learn, and embark on a collective journey of discovery.</p>
        </div>
    </div>
    <div style={{ height: "80vh" }}>
  <div style={{ height: "600px", overflow: "hidden", position: 'relative' }}>
    <img src='https://images.pexels.com/photos/612826/pexels-photo-612826.jpeg?auto=compress&cs=tinysrgb&w=1600' style={{ objectFit: "cover", objectPosition: "bottom", width: "100%", height: "100%" }} />

    <div style={{ width: "500px", position: 'absolute', textAlign: "center", color: 'white', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
     <h3 className='head2' style={{color:"white"}}>OUR GOAL</h3>
     <p >At Vintage Items Limited, our goal transcends the mere transaction of historical artifacts; it is rooted in a broader vision of fostering cultural appreciation and sustainability. Our primary aim is to curate a diverse collection of vintage items that not only captivates the eye but also preserves the rich stories and craftsmanship of the past. Through this endeavor, we strive to become a conduit for cultural exchange, bridging the gap between generations and continents.</p>
     <p className="paragrahh">In alignment with our commitment to sustainability, our goal extends beyond providing exquisite vintage pieces. Vintage Items Limited is dedicated to promoting a more eco-conscious approach to consumption. By emphasizing the inherent value in pre-owned items and the environmental impact of disposable culture, we aspire to inspire a shift towards mindful and sustainable living. Our overarching mission is to contribute to a world where the beauty of the past is cherished, and the footprint left on the environment is minimized, leaving a legacy of appreciation for the craftsmanship of bygone eras</p>
     
    </div>
  </div>
</div>

    </div>
  )
}
