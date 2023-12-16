import React, { useEffect, useState } from 'react';
import "./EditProduct.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { addItem } from '../Services/api';
const EditProduct = () => {
 
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category:'',
        type:'',
        stock:'',
        available:'',
        buildyear:'',
        admprice:"",
        price: 0,
        image: '', 
    });
  const handleAddItem = async () => {
    try {
        await addItem(formData);

        // After adding, fetch the updated data
        // fetchData();
    } catch (error) {
        console.error('Error adding item:', error.message);
        // Add additional handling based on the error type
    }
};
const handleInputChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

  return (
    <div>
           < div className='cantainer' style={{border:"none" ,backgroundColor:"transparent",display:'grid',overflow:'visible'}}>  
          <div className='items' style={{border:"none"}}>  
          <div className='grid' style={{border:"none"}}>  
              <div className='imbox'  >  
 


              <div className="media-dropzone cursor-pointer">
      <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{cursor:"pointer"}}>
      <FontAwesomeIcon icon={faImage} />
        <span className="subheading-3"   >Browse image</span>
      </label>
      <input accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg+xml" type="file" id="fileInput" style={{ display: 'none' }}/>
    </div>


              </div>  
              <div className='imbox' style={{color:'white',}}>
              
              
              
              
              
              
              <div className="media-dropzone cursor-pointer">
      <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{cursor:"pointer"}}>
      <FontAwesomeIcon icon={faImage} />
        <span className="subheading-3"  >
          Image
          <div>
                <label style={{color:"black"}}>Image (URL):</label>
                <input
                    type="text"
                    name="image"
                    onChange={handleInputChange}
                />
            </div></span>
      </label>
    </div>
                
              
              </div>  
              {/* <div className="main-container">  
        <div className="imbo" style={{border:"none"}} >  
                   

                       
                        
                    <div className="media-dropzone cursor-pointer">
      <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{cursor:"pointer",color:"white"}}>
      <FontAwesomeIcon icon={faImage} />
        <span className="subheading-3"   >Browse image</span>
      </label>
      <input accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg+xml" type="file" id="fileInput" style={{ display: 'none' }}/>
    </div>
                                     
        </div>  
                          <div style={{height:'20px',width:'10px',border:"none"}}></div>    
        <div className="imbo">  


        <div className="media-dropzone cursor-pointer">
      <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{cursor:"pointer",color:"white"}}>
      <FontAwesomeIcon icon={faImage} /> 
        <span className="subheading-3"  >Browse image</span>
      </label>
      <input accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg+xml" type="file" id="fileInput" style={{ display: 'none' }}/>
    </div>

        </div>      
      </div>   */}
            </div>  
          </div>  
          <div className='items' style={{border:"none"}}>  
             
          <div className="row " style={{width:"830px", height:"130px",border:'None'}}>  
        <div className="col-md-2" style={{border:"none"}}>  
      



        </div>  
      
        <div className="col-md-4" style={{ border: "none" }}>
  <label htmlFor="productName" className="field-label" >
    Product Name
  </label>
  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
</div>

 

        <div className="col-md-4 "style={{border:"none"}}>   
          <label htmlFor="size" className=" field-label"  >Catagory</label>  
          <input type="text" className="form-control" id="size" onChange={handleInputChange} value={formData.category} name='category' />  
        </div>  
    
      </div>  



      {/* <div className="row " style={{width:"830px", height:"130px",border:"none"}}>  
        <div className="col-md-2" style={{border:"none"}}>  
        <div className="col-md-11 offset-md-0.9" style={{border:"none"}}>   
          <label htmlFor="size" className=" field-label"  >Schedule</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  



        </div>  
      
        <div className="col-md-4 offset-md-1">  
          <label htmlFor="size" className=" field-label"  >Regular Price</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  

        <div className="col-md-4 offset-md-0.9">   
          <label htmlFor="size" className=" field-label"  >Sales Price</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  
    
      </div>   */}

      <div className="row " style={{width:"830px", height:"130px",border:"none"}}>  
        <div className="col-md-2">  
        <div className="col-md-11 offset-md-0.9">   
          <label htmlFor="size" className=" field-label"  >Product Type</label>  
          <input type="text" className="form-control" id="size" onChange={handleInputChange} value={formData.type} name='type'/>  
        </div>  




        </div>  
      
        <div className="col-md-4 offset-md-1">  
          <label htmlFor="size" className=" field-label" >Stock Status</label>  
          <input type="text" className="form-control" id="size" onChange={handleInputChange} value={formData.stock} name='stock'/>  
        </div>  

        <div className="col-md-4 offset-md-0.9">   
          <label htmlFor="size" className=" field-label"  >Available Units</label>  
          <input type="number" className="form-control" id="size" onChange={handleInputChange} name='available' value={formData.available}/>  
    
      </div>  
        </div>  


      


          </div>  
          <div className='items'  style={{border:"none"}}>  
           
   
  <label htmlFor="field-label"  >Description box</label>  
  <textarea name="description" className='description' id="" cols="30" rows="10" style={{ resize:"none",height:"150px",width:"800px"}} onChange={handleInputChange} value={formData.description}  />  

          </div>  


          <div className='items' style={{border:"none"}}>  
          <div className="col-md-11 offset-md-0.9" style={{width:"830px", height:"130px"}}>   
          <label htmlFor="size" className=" field-label"  >Build Year</label>  
          <input type="number" className="form-control" id="size" onChange={handleInputChange} name='buildyear' value={formData.buildyear} />  
        </div>  



        <div className="row " style={{width:"800px", height:"100px",border:"none"}}>  
        <div className="col-md-2">  
      

        </div>  
      
        <div className="col-md-4">  
          <label htmlFor="size" className=" field-label"  >Bought Price</label>  
          <input type="number" className="form-control" id="size" onChange={handleInputChange} name='admprice' value={formData.admprice}/>  
        </div>  

        <div className="col-md-4">   
          <label htmlFor="size" className=" field-label"  >Sales Price</label>  
          <input type="number" className="form-control" id="size" onChange={handleInputChange} name='price' value={formData.price} />  
        </div>  
    
      </div>  


  <div className='sub-button'>  

     {/* <div className='sub-b'> <button type="button" class="btn btn-primary btn-lg">Save To Draft</button></div>   */}
     <div className='sub-b'> <button type="button" class="btn btn-primary btn-lg" onClick={handleAddItem}>Publish Product</button></div>  
</div>
</div>
</div>
</div>


   
  )
};
export default EditProduct;
