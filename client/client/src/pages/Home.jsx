
const Home = ({ cart, setCart }) => {
  // Estado para el carrito  
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} agregado al carrito`);
  };

  // Productos de ejemplo
  const products = [
    { id: 1, name: "Zapato Casual", price: 59.99, image: "https://nikeco.vtexassets.com/arquivos/ids/202813/126020400071.jpg?v=638343796364030000" },
    { id: 2, name: "Zapato Deportivo", price: 89.99, image: "https://via.placeholder.com/300x300" },
    { id: 3, name: "Zapato Elegante", price: 79.99, image: "https://via.placeholder.com/300x300" },
    { id: 4, name: "Sandalias Verano", price: 39.99, image: "https://via.placeholder.com/300x300" },
    { id: 5, name: "Botas Invierno", price: 99.99, image: "https://via.placeholder.com/300x300" },
    { id: 6, name: "Zapatos Formales", price: 119.99, image: "https://via.placeholder.com/300x300" },
    { id: 7, name: "Zapatos Formales", price: 119.99, image: "https://via.placeholder.com/300x300" },
    { id: 8, name: "Zapatos Formales", price: 119.99, image: "https://via.placeholder.com/300x300" },
  ];


  return (
    <div>
      {/* Hero Banner */}
      <section
        className="bg-cover bg-center h-[50vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1595520308180-367f111c9c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHNob2VzfGVufDB8fHx8MTY4MjA4ODIxNg&ixlib=rb-1.2.1&q=80&w=1200')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold">¡Descubre tu estilo con StyleMania!</h1>
          <p className="mt-4 text-lg md:text-xl">
            Los mejores zapatos para cada ocasión. Encuentra calidad, estilo y confort en un solo lugar.
          </p>
          <a
            href="/products"
            className="mt-6 inline-block bg-teal-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-teal-500 transition"
          >
            Comprar Ahora
          </a>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Nuestros Productos Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={`/products/${product.id}`}
                    className="bg-gray-800 text-gray-100 font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition"
                  >
                    Ver Producto
                  </a>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-teal-400 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-teal-500 transition"
                  >
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
