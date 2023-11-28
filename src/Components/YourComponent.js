// import React, { useEffect, useState } from 'react';
// import { addItem, getItems, deleteItem } from '../Services/api';

// const YourComponent = () => {
//     const [data, setData] = useState([]);
//     const [formData, setFormData] = useState({
//         name: '',
//         description: '',
//         price: 0,
//         image: null, // Can be either a file or a URL
//     });

//     useEffect(() => {
//         // Fetch data when the component mounts
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             // Retrieve data from the backend
//             const items = await getItems();

//             // Update the state with the retrieved data
//             setData(items);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     const handleAddItem = async () => {
//         try {
//             // Create a FormData object for file upload
//             const formDataForUpload = new FormData();
//             formDataForUpload.append('name', formData.name);
//             formDataForUpload.append('description', formData.description);
//             formDataForUpload.append('price', formData.price);

//             // Check if image is a file or a URL
//             if (formData.image instanceof File) {
//                 formDataForUpload.append('image', formData.image);
//             } else if (typeof formData.image === 'string') {
//                 formDataForUpload.append('image', formData.image);
//             }

//             await addItem(formDataForUpload);

//             // After adding, fetch the updated data
//             fetchData();
//         } catch (error) {
//             console.error('Error adding item:', error.message);
//             // Add additional handling based on the error type
//         }
//     };

//     const handleDeleteItem = async (itemId) => {
//         try {
//             console.log('Deleting item with ID:', itemId);
            
//             // Call the deleteItem API function with the item ID
//             await deleteItem(itemId);
    
//             console.log('Item deleted successfully');
    
//             // After deleting, fetch the updated data
//             fetchData();
//         } catch (error) {
//             console.error('Error deleting item:', error.message);
//             // Add additional handling based on the error type
//         }
//     };
    

//     const handleInputChange = (e) => {
//         if (e.target.name === 'image') {
//             // Handle file input separately
//             setFormData({
//                 ...formData,
//                 image: e.target.files[0] || e.target.value, // Use the file or the string URL
//             });
//         } else {
//             // Update other form fields as usual
//             setFormData({
//                 ...formData,
//                 [e.target.name]: e.target.value,
//             });
//         }
//     };

//     return (
//         <div>
//             <h1>Your Component</h1>
//             <div>
//                 <label>Name:</label>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Description:</label>
//                 <textarea
//                     name="description"
//                     value={formData.description}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Price:</label>
//                 <input
//                     type="number"
//                     name="price"
//                     value={formData.price}
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <div>
//                 <label>Image:</label>
//                 <input
//                     type="file"
//                     name="image"
//                     onChange={handleInputChange}
//                 />
//             </div>
//             <button onClick={handleAddItem}>Add Item</button>
//             <ul>
//                 {data.map(item => (
//                     <li key={item._id}>
//                         {item.name} - {item.price} - {item.description} - 
//                         {item.image && typeof item.image === 'string' ? (
//                             <img src={item.image} alt="Item" />
//                         ) : (
//                             "No image available"
//                         )}
//                         <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default YourComponent;


import React, { useEffect, useState } from 'react';
import { addItem, getItems, deleteItem } from '../Services/api';

const YourComponent = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: 0,
        image: '', // Use a string for the image URL
    });

    useEffect(() => {
        // Fetch data when the component mounts
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            // Retrieve data from the backend
            const items = await getItems();

            // Update the state with the retrieved data
            setData(items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddItem = async () => {
        try {
            await addItem(formData);

            // After adding, fetch the updated data
            fetchData();
        } catch (error) {
            console.error('Error adding item:', error.message);
            // Add additional handling based on the error type
        }
    };

    const handleDeleteItem = async (itemId) => {
        try {
            console.log('Deleting item with ID:', itemId);

            // Call the deleteItem API function with the item ID
            await deleteItem(itemId);

            console.log('Item deleted successfully');

            // After deleting, fetch the updated data
            fetchData();
        } catch (error) {
            console.error('Error deleting item:', error.message);
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
            <h1>Your Component</h1>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </div>
            <div>
    <label>Category:</label>
    <input
        name="category"
        type="text"
        onChange={handleInputChange}
    />
</div>

            <div>
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Bought Price:</label>
                <input
                    type="number"
                    name="admprice"
                    value={formData.admprice}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Image (URL):</label>
                <input
                    type="text"
                    name="image"
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {data.map(item => (
                    <li key={item._id}>
                        {item.name} - {item.price} - {item.description} -
                        {item.image ? (
                            <img src={item.image} alt="Item" />
                        ) : (
                            "No image available"
                        )}
                        <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YourComponent;
