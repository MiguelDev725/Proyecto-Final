/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import {
  getProductsRequest,
  createNewProductRequest,
} from "../apis/productsApi.js";

export const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const createNewProduct = async (product) =>{
    try {
        const res = await createNewProductRequest(product);
        setProducts([...products, res.data]);
    } catch (error) {
        console.error(error);
    }
  }

  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      console.log("Productos obtenidos:", res.data);
      setProducts(res.data.products || []);
    } catch (error) {
      console.error("Error al obtener productos:", error.response?.data || error.message);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        getProducts,
        createNewProduct,
      }}
    >
    {children}
    </ProductContext.Provider>
  );
};
