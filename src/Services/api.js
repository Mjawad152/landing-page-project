import axios from 'axios';

const baseURL = 'http://localhost:5000'; // Update this with your server URL

const api = axios.create({
  baseURL: baseURL,
});

export const addItem = async (formData) => {
  try {
    const response = await api.post('/add-item', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getItems = async () => {
  try {
    const response = await api.get('/get-items');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteItem = async (itemId) => {
  try {
    const response = await api.delete(`/delete-item/${itemId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
