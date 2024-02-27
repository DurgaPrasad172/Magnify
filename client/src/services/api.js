// api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5015', // Update the port if necessary
});

export default instance;
