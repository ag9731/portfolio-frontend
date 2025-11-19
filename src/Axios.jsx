import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-backend-0qew.onrender.com/",
  timeout: 5000,
  withCredentials: true,
  headers: { "X-Custom-Header": "foobar" },
});

export default api;
