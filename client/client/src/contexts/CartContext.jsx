/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

// Crea el contexto
const CartContext = createContext();

// Hook para usar el contexto fácilmente
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe ser usado dentro de CartProvider");
  return context;
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Cargar carrito desde localStorage si existe
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Guardar carrito en localStorage cada vez que cambia
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar un producto al carrito
  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item._id === product._id);
    if (!isProductInCart) {
      setCart([...cart, product]);
    } else {
      alert(`${product.name} ya está en el carrito`);
    }
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item._id !== productId));
  };

  // Calcular el precio total
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
