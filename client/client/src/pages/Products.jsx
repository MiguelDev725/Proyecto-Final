import { useState, useEffect } from "react";
import { useProduct } from "../contexts/ProductsContext";

const Products = () => {
  const { products, getProducts } = useProduct();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Nuestros Productos
      </h1>

      {/* Barra de Búsqueda */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-800 font-bold">${product.price.toFixed(2)}</p>
              <button
                className="mt-4 w-full bg-teal-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-teal-500 transition"
                onClick={() => alert(`Añadido: ${product.name}`)}
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje si no hay productos */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-6">
          No se encontraron productos con el término "{searchTerm}".
        </p>
      )}
    </div>
  );
};

export default Products;
