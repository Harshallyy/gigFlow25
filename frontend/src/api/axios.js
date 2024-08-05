import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers = config.headers || {};

  if (token && token !== "undefined" && token !== "null") {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;