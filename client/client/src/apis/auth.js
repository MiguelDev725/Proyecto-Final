import axios from './axios.js'

export const RegisterRequest = (user) => {
    return axios.post(`/register`, user);
  };
  
  export const LoginRequest = (user) => {
    return axios.post(`/login`, user);
  };
  
  export const verifyTokenRequest = () => {
    return axios.get("/verify");
  };