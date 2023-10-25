import React from 'react'
import Footer from './Components/Footer';
import BackgroundVideo from './Components/BackgroundVideo';
import CustomNavbar from './Components/CustomNavbar';
import Admin from './Components/Admin';
import Slides from './Components/Slides';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import StaticNavbar from './Components/StaticNavbar';
import Products from './Components/Carosel';

import Advertise from './Components/Advertise';

import ContentAdver from './Components/ContentAdver';
import TopProduct from './Components/TopProduct';
import Boutique from './Boutique';
import AdminDashboard from './Components/AdminDashboard';
import EditProduct from './Components/EditProduct';
import ProductsGrid from './Components/ProductsGrid';
import { Carousel } from 'bootstrap';
import Carosel from './Components/Carosel';
import YourCart from './Components/Cart';






function App() {
    return (

      <>
      <Router>
       <Routes>
          
          <Route path='/' element={<CustomNavbar/>}/>
          
          <Route path='/Shop' element={<Carosel/>}/>
          <Route path='/Contact' element={<Footer/>}/>
          <Route path='/yourcart' element={<YourCart/>}/>
          <Route path='Boutique' element={<Boutique/>}/>
          <Route path='/AdminDashboard' element={<AdminDashboard />}/>
          <Route path='/AdminDashboard/edit' element={<AdminDashboard type="edit"/>}/>
          <Route path='/AdminDashboard/productgrid' element={<AdminDashboard type="productgrid"/>}/>
          
          
          
        </Routes>
      </Router>





      </>
     
    );

}

export default App;




