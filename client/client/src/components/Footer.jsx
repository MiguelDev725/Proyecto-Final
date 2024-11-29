import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Slogan */}
        <div>
          <h2 className="text-3xl font-bold text-teal-400">StyleMania</h2>
          <p className="mt-4 text-gray-300">
            Encuentra el estilo perfecto para cada ocasión. ¡Tus zapatos ideales
            están a solo un clic!
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold text-teal-300">Navegación</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/shop" className="hover:text-teal-400 transition">
                Tienda
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-teal-400 transition">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-teal-400 transition">
                Blog de Estilo
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-teal-400 transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Social and Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-teal-300">
            Mantente Conectado
          </h3>
          <p className="mt-4 text-gray-300">
            Suscríbete a nuestro boletín y síguenos en redes sociales para no
            perderte las últimas novedades.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 rounded-l-lg focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-teal-400 text-gray-900 font-bold rounded-r-lg hover:bg-teal-500 transition"
            >
              Suscribirme
            </button>
          </form>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} StyleMania. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
