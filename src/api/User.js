import axios from "axios";

// Read from Vite environment variable (supports both VITE_BASE_URL and VITE_API_BASE_URL)
const envUrl =
  import.meta.env.VITE_BASE_URL ||
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:4000";

let host = envUrl.trim().replace(/\/+$/, "");

// Force the baseURL to always include the required backend prefix: /api/user
// If the user provided "https://test-backend-1-b9m7.onrender.com", this automatically becomes
// "https://test-backend-1-b9m7.onrender.com/api/user"
if (!host.endsWith("/api/user")) {
  if (host.endsWith("/api")) {
    host = `${host}/user`;
  } else {
    host = `${host}/api/user`;
  }
}

const api = axios.create({
  baseURL: host,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token if available in localStorage
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
