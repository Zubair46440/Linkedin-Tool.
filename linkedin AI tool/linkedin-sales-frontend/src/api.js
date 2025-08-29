import axios from "axios";

// Base URL from Vite env
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Prospects API
export const fetchProspects = () => API.get("/prospects");
export const addProspect = (prospect) => API.post("/prospects", prospect);

// Messages API
export const fetchMessages = () => API.get("/messages");
export const addMessage = (message) => API.post("/messages", message);

// Users API
export const fetchUsers = () => API.get("/users");
export const addUser = (user) => API.post("/users", user);

export default API;
