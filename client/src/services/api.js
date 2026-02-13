import axios from "axios";

const API = axios.create({
  baseURL: axios.post("https://your-backend.onrender.com/api/users", data)
,
});

export default API;
