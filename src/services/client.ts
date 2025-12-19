import axios from "axios";

const client = axios.create({
  baseURL: "https://ga-mobile-api.loklok.tv/cms/app",
  headers: {
    lang: "en",
    versioncode: "12",
    clienttype: "ios_default",
  },
});

// Add request interceptor to bypass CORS if needed
client.interceptors.request.use((config) => {
  // Ensure headers are sent
  return config;
});

export default client;
