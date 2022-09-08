import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'https://mydummyserver.herokuapp.com',
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

export default axiosInstance;