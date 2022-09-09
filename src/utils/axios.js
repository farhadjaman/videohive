import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: 'https://mydummyserver.herokuapp.com',
  timeout: 3000,
  headers: { "X-Custom-Header": "foobar" },
  mode: 'no-cors',
});

export default axiosInstance;