import React from 'react'
import './AdminDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import EditProduct from './EditProduct';
import ProductsGrid from './ProductsGrid';
import UserProducts from "./UserProducts";
import TopProduct from './TopProduct';
import { Link, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
export default function ProductEdit(props) {
  return (
    <>
    <div style={{height:"100%",widows:"100%",position:'relative',backgroundColor: "#031123"}}>
        <div className="grid-container">
      <div className="upper-row">
        Upper Row

      </div>
      <div className="left-column" >
        Left Column

        <div >
          <h2 style={{color:'white'}}> </h2>
          <div className='dash'>
          <button type="button" className="btn btn-primary btn-lg" style={{color:'white'}}><Link class="dropdown-item" to="/AdminDashboard/edit">Edit Product</Link></button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'white'}}><Link class="dropdown-item" to="/AdminDashboard/productgrid">Product Grid</Link></button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'white'}}><Link class="dropdown-item" to="/AdminDashboard/userProducts">Products by User</Link> </button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'white'}}>Reviews</button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'white'}}>Customers</button>
            <button type="button" className="btn btn-primary btn-lg" style={{color:'white'}}>Transaction</button>
          </div>
        </div>









      </div>
      < div className="right-column" style={{height:'100%',width:'100%'}}>
        
        {props.type=="edit" &&<EditProduct/>}
        {props.type=="productgrid" &&<ProductsGrid/>}
        {props.type=="userProducts" &&<UserProducts/> }



      </div>
    </div>
    </div>
    <Footer/>
    </>

  
  )
}



