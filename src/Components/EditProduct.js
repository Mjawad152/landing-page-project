import React from 'react'
import "./EditProduct.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';

export default function EditProduct() {
  return (
    <div>
           < div className='cantainer' style={{border:"none" ,backgroundColor:"transparent",display:'grid',overflow:'visible'}}>  
          <div className='items' style={{border:"none"}}>  
          <div className='grid' style={{border:"none"}}>  
              <div className='imbox' style={{color:'white'}}>  
 


              <div className="media-dropzone cursor-pointer">
      <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{cursor:"pointer"}}>
      <FontAwesomeIcon icon={faImage} />
        <span className="subheading-3" style={{color:'white'}} >Browse image</span>
      </label>
      <input accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg+xml" type="file" id="fileInput" style={{ display: 'none' }}/>
    </div>


              </div>  
              <div className='imbox' style={{color:'white',backgroundcolor: "rgb(53, 69, 133)"}}>
              
              
              
              
              
              
              <div className="media-dropzone cursor-pointer">
      <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{cursor:"pointer"}}>
      <FontAwesomeIcon icon={faImage} />
        <span className="subheading-3" style={{color:'white'}} >Browse image</span>
      </label>
      <input accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg+xml" type="file" id="fileInput" style={{ display: 'none' }}/>
    </div>
              
              
              
              
              
              
              
              
              
              
              
              </div>  
              <div className="main-container">  
        <div className="imbo" style={{border:"none"}} >  
                   

                       
                        
                    <div className="media-dropzone cursor-pointer" style={{}}>
      <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{cursor:"pointer",color:"white"}}>
      <FontAwesomeIcon icon={faImage} />
        <span className="subheading-3" style={{color:'white'}} >Browse image</span>
      </label>
      <input accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg+xml" type="file" id="fileInput" style={{ display: 'none' }}/>
    </div>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                       
        </div>  
                          <div style={{height:'20px',width:'10px',border:"none"}}></div>    
        <div className="imbo">  


        <div className="media-dropzone cursor-pointer">
      <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{cursor:"pointer",color:"white"}}>
      <FontAwesomeIcon icon={faImage} /> 
        <span className="subheading-3" style={{color:'white'}}>Browse image</span>
      </label>
      <input accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg+xml" type="file" id="fileInput" style={{ display: 'none' }}/>
    </div>






















        </div>      
      </div>  
            </div>  
          </div>  
          <div className='items' style={{border:"none"}}>  
             
          <div className="row " style={{width:"830px", height:"130px",border:'None'}}>  
        <div className="col-md-2" style={{border:"none"}}>  
      



        </div>  
      
        <div className="col-md-4 " style={{border:"none"}}>  
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>Product Name</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  

        <div className="col-md-4 "style={{border:"none"}}>   
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>Catagory</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  
    
      </div>  



      <div className="row " style={{width:"830px", height:"130px",border:"none"}}>  
        <div className="col-md-2" style={{border:"none"}}>  
        <div className="col-md-11 offset-md-0.9" style={{border:"none"}}>   
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>Schedule</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  



        </div>  
      
        <div className="col-md-4 offset-md-1">  
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>Regular Price</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  

        <div className="col-md-4 offset-md-0.9">   
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>Sales Price</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  
    
      </div>  

      <div className="row " style={{width:"830px", height:"130px",border:"none"}}>  
        <div className="col-md-2">  
        <div className="col-md-11 offset-md-0.9">   
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>Product Type</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  




        </div>  
      
        <div className="col-md-4 offset-md-1">  
          <label htmlFor="size" className=" field-label"style={{color:'white'}}>Stock Status</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  

        <div className="col-md-4 offset-md-0.9">   
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>Available Units</label>  
          <input type="text" className="form-control" id="size" />  
    
      </div>  
        </div>  


      


          </div>  
          <div className='items'  style={{border:"none"}}>  
           
   
  <label htmlFor="field-label" style={{color:'white'}}>Description box</label>  
  <textarea name="de" className='description' id="" cols="30" rows="10" style={{backgroundColor:'#354585',resize:"none",height:"150px",width:"800px"}}></textarea>  

          </div>  


          <div className='items' style={{border:"none"}}>  
          <div className="col-md-11 offset-md-0.9" style={{width:"830px", height:"130px"}}>   
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>SKU</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  



        <div className="row " style={{width:"800px", height:"100px",border:"none"}}>  
        <div className="col-md-2">  
      

        </div>  
      
        <div className="col-md-4">  
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>Zip</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  

        <div className="col-md-4">   
          <label htmlFor="size" className=" field-label" style={{color:'white'}}>Zip</label>  
          <input type="text" className="form-control" id="size" />  
        </div>  
    
      </div>  


  <div className='sub-button'>  

     <div className='sub-b'> <button type="button" class="btn btn-primary btn-lg">Save To Draft</button></div>  
     <div className='sub-b'> <button type="button" class="btn btn-primary btn-lg">Publish Product</button></div>  
</div>
</div>
</div>
</div>


   
  )
}
