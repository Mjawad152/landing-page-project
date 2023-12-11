import React, { useEffect, useState } from 'react';
import './EditProduct.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-regular-svg-icons';
import { addItem, deleteItem } from '../Services/api';

export const UpdateProduct = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    type: '',
    stock: '',
    available: '',
    buildyear: '',
    admprice: '',
    price: 0,
    image: '',
  });

  useEffect(() => {
    setFormData({
      name: props.prod.name,
      category: props.prod.category,
      type: props.prod.type,
      stock: props.prod.stock,
      available: props.prod.available,
      buildyear: props.prod.buildyear,
      admprice: props.prod.admprice,
      price: props.prod.price,
      image: props.prod.image,
      description: props.prod.description,
    });
  }, [props.prod]);

  const handleAddItem = async () => {
    try {
    
      await addItem(formData);
      await deleteItem(props.prod._id);
    
    } catch (error) {
      console.error('Error adding item:', error.message);
     
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
      <div className='container' style={{ border: 'none', backgroundColor: 'transparent', display: 'grid', overflow: 'visible' }}>
        <div className='items' style={{ border: 'none' }}>
          <div className='grid' style={{ border: 'none' }}>
            <div className='imbox' style={{ color: 'white' }}>
              <div className="media-dropzone cursor-pointer">
                <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{ cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faImage} />
                  <span className="subheading-3" style={{ color: 'white' }}>Browse image</span>
                </label>
                <input accept="image/jpeg,image/png,image/gif,image/bmp,image/webp,image/svg+xml" type="file" id="fileInput" style={{ display: 'none' }} />
              </div>
            </div>
            <div className='imbox' style={{ color: 'white', backgroundColor: "rgb(53, 69, 133)" }}>
              <div className="media-dropzone cursor-pointer">
                <label htmlFor="fileInput" className="flex flex-col items-center gap-2.5" style={{ cursor: 'pointer' }}>
                  <FontAwesomeIcon icon={faImage} />
                  <span className="subheading-3" style={{ color: 'white' }}>
                    Image
                    <div>
                      <label>Image (URL):</label>
                      <input
                        type="text"
                        name="image"
                        onChange={handleInputChange}
                        value={formData.image}
                      />
                    </div>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='items' style={{ border: 'none' }}>
          <div className="row " style={{ width: "830px", height: "130px", border: 'None' }}>
            <div className="col-md-2" style={{ border: "none" }}></div>
            <div className="col-md-4" style={{ border: "none" }}>
              <label htmlFor="productName" className="field-label" style={{ color: 'white' }}>
                Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-4 " style={{ border: "none" }}>
              <label htmlFor="size" className="field-label" style={{ color: 'white' }}>Category</label>
              <input type="text" className="form-control" id="size" onChange={handleInputChange} value={formData.category} name='category' />
            </div>
          </div>
          <div className="row " style={{ width: "830px", height: "130px", border: "none" }}>
            <div className="col-md-2">
              <div className="col-md-11 offset-md-0.9">
                <label htmlFor="size" className="field-label" style={{ color: 'white' }}>Product Type</label>
                <input type="text" className="form-control" id="size" onChange={handleInputChange} value={formData.type} name='type' />
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <label htmlFor="size" className="field-label" style={{ color: 'white' }}>Stock Status</label>
              <input type="text" className="form-control" id="size" onChange={handleInputChange} value={formData.stock} name='stock' />
            </div>
            <div className="col-md-4 offset-md-0.9">
              <label htmlFor="size" className="field-label" style={{ color: 'white' }}>Available Units</label>
              <input type="number" className="form-control" id="size" onChange={handleInputChange} name='available' value={formData.available} />
            </div>
          </div>
        </div>
        <div className='items' style={{ border: 'none' }}>
          <label htmlFor="field-label" style={{ color: 'white' }}>Description box</label>
          <textarea name="description" className='description' id="" cols="30" rows="10" style={{ resize: "none", height: "150px", width: "800px" }} onChange={handleInputChange} value={formData.description} />
        </div>
        <div className='items' style={{ border: 'none' }}>
          <div className="col-md-11 offset-md-0.9" style={{ width: "830px", height: "130px" }}>
            <label htmlFor="size" className="field-label" style={{ color: 'white' }}>Build Year</label>
            <input type="number" className="form-control" id="size" onChange={handleInputChange} name='buildyear' value={formData.buildyear} />
          </div>
          <div className="row " style={{ width: "800px", height: "100px", border: "none" }}>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <label htmlFor="size" className="field-label" style={{ color: 'white' }}>Bought Price</label>
              <input type="number" className="form-control" id="size" onChange={handleInputChange} name='admprice' value={formData.admprice} />
            </div>
            <div className="col-md-4">
              <label htmlFor="size" className="field-label" style={{ color: 'white' }}>Sales Price</label>
              <input type="number" className="form-control" id="size" onChange={handleInputChange} name='price' value={formData.price} />
            </div>
          </div>
          <div className='sub-button'>
            <div className='sub-b'>
              <button type="button" className="btn btn-primary btn-lg" onClick={handleAddItem}>Publish Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
