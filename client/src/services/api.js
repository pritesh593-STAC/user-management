import axios from "axios";

const API = axios.create({
  baseURL: "https://user-management-1-f0ow.onrender.com/api",
});

export default API;
