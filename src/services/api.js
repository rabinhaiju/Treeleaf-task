import axios from 'axios';

const api = axios.create({
  baseURL: 'https://restcountries.com/v3.1', // Replace with your actual API base URL
});

export default api;
