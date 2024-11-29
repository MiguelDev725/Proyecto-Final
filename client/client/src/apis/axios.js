import axios from "axios";
const VITE_API_URL = import.meta.env.VITE_API_URL;
console.log(VITE_API_URL);

const instance = axios.create({
  baseURL: `${VITE_API_URL}/api`,
  withCredentials: true,
});

export default instance;
