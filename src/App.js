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
import CustomerDetail from './Components/CustomerDetail';
import Payment from './Components/Payment';
import PicText from './Components/PicText'
import Cart from './Components/Cart';
import ContactUs from './Components/ContactUs';
import Aboutus from './Components/Aboutus';
import Test from './Test';
import YourComponent from './Components/YourComponent';





function App() {
    return (

      <div>
      <YourComponent/>
     
      {/* <Router>
       <Routes>
          
          <Route path='/' element={<CustomNavbar/>}/>
          
          <Route path='/Shop' element={<TopProduct/>}/>
          <Route path='/Contact' element={<Footer/>}/>
          <Route path='/yourcart' element={<YourCart/>}/>
          <Route path='Boutique' element={<Boutique/>}/>
          <Route path='/AdminDashboard' element={<AdminDashboard />}/>
          <Route path='/AdminDashboard/edit' element={<AdminDashboard type="edit"/>}/>
          <Route path='/AdminDashboard/productgrid' element={<AdminDashboard type="productgrid"/>}/>
          <Route path='/Payment' element={<Payment/>}/>
          <Route path='/CustomerDetail' element={<CustomerDetail/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Contactus' element={<ContactUs/>}/>
          <Route path='/Aboutus' element={<Aboutus/>}/>
        </Routes>
      </Router> */}





      </div>
     
    );

}

export default App;




