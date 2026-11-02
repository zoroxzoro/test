import axios from "axios";

// In production (Vercel), VITE_API_BASE_URL points to the Render backend
// e.g. https://your-backend.onrender.com/api/user
const rawBaseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api/user";

// Normalize trailing slash
const baseURL = rawBaseURL.replace(/\/+$/, "");

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token from localStorage if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
