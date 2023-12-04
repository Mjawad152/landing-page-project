import React, { useState } from 'react'
import { userdata } from '../Services/api';

export default function UserAdd() {
    const [proData,setProData] = useState({
        productName:"",
        productDescription:"",
        productPrice:"",
        productUrl:"",
    })
    const handleChange=(e)=>{
        setProData({...proData,[e.target.name]:e.target.value});
        console.log(proData);
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        userdata(proData);
        
    }
  return (
    <div className='col-md-6 position-absolute start-50 translate-middle-x mt-5'>
        <form class="row g-3 needs-validation" novalidate onSubmit={handleSubmit}>
        <div >
  <label for="validationTooltip01" class="mb-2">Product Name</label>
    <input  class="form-control mb-3" type="String"  onChange={handleChange} name='productName' value={proData.productName}/>
  </div>
  <div >
  <label for="validationTooltip01" class="mb-2">Description</label>
    <input  class="form-control mb-3" type="description" onChange={handleChange} name='productDescription' value={proData.productDescription} />
  </div>
  <div>
  <label for="validationTooltip01" class="mb-2">Price:</label>
  <input  class="form-control mb-3" type="number" onChange={handleChange} name='productPrice' value={proData.productPrice} />
  </div>
  <div>
  <label for="validationTooltip01" class="mb-2">Image(URL)</label>
  <input  class="form-control mb-3" type="String" onChange={handleChange} name='productUrl' value={proData.productUrl} />
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit" >Add Product</button>
  </div>
</form>
    </div>
  )
}
