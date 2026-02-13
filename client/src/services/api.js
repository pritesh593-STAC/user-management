import axios from "axios";

const API = axios.create({
  baseURL: "https://user-management-uxl7.onrender.com/api",
});

export default API;
