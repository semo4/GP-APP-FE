import axios from "axios";

const API = axios.create({
  baseURL: "https://gp-app-be.onrender.com/",
});

// API methods
export const ingestData = (items) => API.post("/ingest-data/", items);
export const searchPinecone = (query) => API.post("/search/", { query });
export const generateArticle = (prompt) => API.post("/generate-article/", { prompt });
export const savePreferences = (userId, preferences) =>
  API.post(`/save-preferences/`, { userId, preferences });
export const getPreferences = (userId) => API.get(`/get-preferences/${userId}`);
