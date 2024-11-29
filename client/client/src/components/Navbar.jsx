import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-teal-400">
              StyleMania
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="/products"
              className="hover:text-teal-400 transition duration-300"
            >
              Productos
            </a>
            <a
              href="/contact"
              className="hover:text-teal-400 transition duration-300"
            >
              Contacto
            </a>
            <a
              href="/about"
              className="hover:text-teal-400 transition duration-300"
            >
              About
            </a>
            <a
              href="/cart"
              className="hover:text-teal-400 transition duration-300"
            >
              Carrito 🛒
            </a>
          </div>

          {/* Authentication Buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="/login"
              className="px-4 py-2 text-sm font-medium bg-gray-800 text-gray-300 hover:bg-gray-700 rounded-lg transition duration-300"
            >
              Iniciar Sesión
            </a>
            <a
              href="/register"
              className="px-4 py-2 text-sm font-medium bg-teal-400 text-gray-900 hover:bg-teal-500 rounded-lg transition duration-300"
            >
              Registrarse
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-gray-300 focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-gray-800">
        <a
          href="/products"
          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          Productos
        </a>
        <a
          href="/contact"
          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          Contacto
        </a>
        <a
          href="/about"
          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          About
        </a>
        <a
          href="/cart"
          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          Carrito 🛒
        </a>
        <a
          href="/login"
          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          Iniciar Sesión
        </a>
        <a
          href="/register"
          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          Registrarse
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
