import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
});
// api.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem("@TOKEN");

//   if (token) {
//     api.defaults.headers.authorization = `Bearer ${token}`;
//   }

//   return config;
// });
