import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar el formulario (API o correo electrónico)
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Contáctanos
      </h1>
      <p className="text-center text-gray-600 mb-8">
        ¿Tienes alguna pregunta o sugerencia? ¡Estamos aquí para ayudarte!
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Ingresa tu correo electrónico"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Escribe tu mensaje aquí"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-teal-400 text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-teal-500 transition"
        >
          Enviar
        </button>
        {submitted && (
          <p className="mt-4 text-center text-teal-500 font-semibold">
            ¡Tu mensaje fue enviado con éxito!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;