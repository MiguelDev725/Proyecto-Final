import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 lg:px-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nosotros</h1>
        <p className="text-lg text-gray-700 mb-8">
          En <span className="text-teal-500 font-semibold">StyleMania</span>,
          nuestra misión es redefinir la experiencia de compra de calzado, ofreciendo productos de alta calidad que combinan estilo, comodidad y accesibilidad. 
          Desde nuestros humildes comienzos hasta convertirnos en una referencia en la industria, hemos trabajado con pasión y dedicación para brindar lo mejor a nuestros clientes.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagen de la empresa */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHNob2VzfGVufDB8fHx8MTY4MjExNzYwNw&ixlib=rb-1.2.1&q=80&w=1200"
            alt="Nuestra empresa"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Texto informativo */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Qué nos hace diferentes?
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Calzado diseñado para todos los estilos y necesidades.</li>
            <li>Compromiso con la sostenibilidad y la innovación.</li>
            <li>Servicio al cliente excepcional y personalizado.</li>
            <li>Precios competitivos sin comprometer la calidad.</li>
          </ul>
          <p className="mt-4 text-gray-700">
            En StyleMania, creemos que tus zapatos son más que accesorios: son una extensión de tu identidad y estilo personal. Únete a nosotros para recorrer el camino hacia un futuro más estilizado.
          </p>
        </div>
      </section>

      {/* Botón de redirección */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/contact")}
          className="bg-teal-400 text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-teal-500 transition shadow-lg"
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default About;
