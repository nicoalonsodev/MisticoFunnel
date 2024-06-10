import axios from "axios";

export const fetchProductsFromBackend = async () => {
  try {
    const response = await axios.get("http://localhost:3001/products");
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const fetchUsersFromBackend = async () => {
  try {
    const response = await axios.get("http://localhost:3001/users");
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const fetchOrdersFromBackend = async () => {
  try {
    const response = await axios.get("http://localhost:3001/orders");
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const fetchCommissionsFromBackend = async () => {
  try {
    const response = await axios.get("http://localhost:3001/commissions");
    return response.data; 
  } catch (error) {
    throw error;
  }
};

//http://localhost:3001/

//http://localhost:3001/

const API_URL = 'http://localhost:3001'; // Cambia esto a tu URL del backend

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.token) {
      localStorage.setItem('userToken', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw new Error('Invalid credentials');
  }
};


const getAuthHeaders = () => {
  const token = localStorage.getItem('userToken');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getProtectedData = async () => {
  try {
    const response = await axios.get(`${API_URL}/admin`, getAuthHeaders());
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch protected data');
  }
};