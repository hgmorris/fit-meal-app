import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',  // or the URL of your backend
});

export default API;


// import axios from 'axios';

// const API = axios.create({
//   baseURL: 'http://localhost:5000/api',
// });

// // Add a request interceptor to include the token
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// export default API;
