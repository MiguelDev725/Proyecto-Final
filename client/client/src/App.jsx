import { ProductProvider } from "./contexts/ProductsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./contexts/CartContext";
import Contact from "./pages/Contact";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  );
}
export default App;
