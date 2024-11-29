import axios from "axios";

export const getProductsRequest = ()=>{
    return axios.post('/products');
}