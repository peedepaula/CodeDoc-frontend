import axios from "axios";

const TOKEN_KEY = "token_sufla";

const api = axios.create({
  baseURL: "http://192.168.0.105:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
export { TOKEN_KEY };