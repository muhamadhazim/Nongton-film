import axios from "axios";

const client = axios.create({
  baseURL: "https://ga-mobile-api.loklok.tv/cms/app",
  headers: {
    lang: "en",
    versioncode: "12",
    clienttype: "ios_default",
  },
});

export default client;
