import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center">
        Carrito de Compras
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 mt-6">Tu carrito está vacío.</p>
      ) : (
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cart.map((product) => (
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
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-4">
            <h2 className="text-xl font-bold text-gray-900">
              Resumen del Pedido
            </h2>
            <p className="text-gray-700 mt-2">
              Total:{" "}
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </p>
            <button
              className="mt-4 w-full bg-teal-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-500 transition"
              onClick={() => alert("Redirigiendo al pago...")}
            >
              Ir a Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
