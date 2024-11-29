import axios from "./axios";

export const getProductsRequest = ()=>{
    return axios.post('/products');
}

export const createNewProductRequest = (product) => {
    return axios.post('/newproduct', product);
}