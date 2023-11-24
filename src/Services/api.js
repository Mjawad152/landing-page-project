// import axios from "axios";

// const url = "http://localhost:5000";

// export const sendMessageViaAxios = async () => {
//     console.log("axios api reached..");
//     return await axios.get("http://localhost:5000");
// }
// /frontend/src/services/api.js
// import axios from 'axios';

// const url = 'http://localhost:5000';  

// export const sendMessageViaAxios = async () => {
//     console.log('axios api reached..');
//     return await axios.get(`${url}/get-items`);
// };
// /frontend/src/services/api.js
import axios from 'axios';

const baseUrl = 'http://localhost:5000';  // Update with your backend server URL

export const addItem = async (itemData) => {
    try {
        const response = await axios.post(`${baseUrl}/add-item`, itemData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getItems = async () => {
    try {
        const response = await axios.get(`${baseUrl}/get-items`);
        return response.data;
    } catch (error) {
        throw error;
    }
};



