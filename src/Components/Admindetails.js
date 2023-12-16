import React, { useEffect, useState } from 'react';
import { getData } from '../Services/api';
import { getItems } from '../Services/api';
import "./Admindetails.css"
const Admindetails = () => {
  const [data, setData] = useState([]);
  const [ndata, setNdata] = useState([]);

  useEffect(() => {
    
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
         
          const userDetail = await getData();
          console.log("rinng or not")
          
          setData(userDetail);
      } catch (error) {
          console.error('Error fetching data:', error);
      }
  };

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const items = await getItems();
      setNdata(items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };





  return (
    <div>

<div className="grid-containe">

      <div className="grid-item">  <table className="custom-table">
       
      <thead>
        <tr>
          <th>Tracking Number</th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Description</th>
          <th>Type</th>
          <th>Stock</th>
          <th>Available Units</th>
          <th>Build Year </th>
          <th>Sale Price</th>
          <th>Bought Price</th>
          <th>Images</th>
        </tr>
      </thead>
      <tbody>
     {ndata.map((item) => (
          <tr >
            <td>{item._id}</td>
            <td>{item.name}</td>
            <td> {item.category}</td>
            <td> {item.description}</td>
            <td>{item.stock}</td>
            <td>{item.type}</td>
            <td>{item.available}</td>
            <td>{item.buildyear}</td>
            <td>{item.price}</td>
            <td>{item.admprice }</td>
            <td><img src={item.image} alt="" style={{width:"40px",height:"40px"}} /></td>
          </tr>
        ))} 
      </tbody>
    </table></div>
      <div className="grid-item"> <div className='container' style={{backgroundColor:"antiquewhite"}}>
        <h3 className='text-center'>User Products</h3>
        <div>
        </div>
        
       </div >
       <div class="container mb-3"  style={{maxWidth:"700px",border:"none"}}>
       {data.map(iteme => (
         <div class="row g-0">
          <div class="col-md-4">
  <img
    src={iteme.productUrl}
    class="img-fluid rounded-start"
    style={{ height: "100%", width: "100%", objectFit: "cover", objectPosition: "center" }}
  />
</div>

           <div class="col-md-6" style={{border:"1px solid black"}}>
             <div class="card-body" style={{backgroundColor:"white"}}>
               <h5 class="card-title" style={{fontWeight:"bold",color:"black"}}> {iteme.productName}</h5>
               <p class="card-text" style={{fontWeight:"bold",color:"black"}}>Description: {iteme.productDescription}</p>
               <p className="card-text" style={{fontWeight:"bold",color:"black"}}>Price: {iteme.productPrice}</p>
               </div>
               </div>
      </div>
     ))} 
    </div></div>

    </div>

    </div>
  );
};
export default Admindetails;