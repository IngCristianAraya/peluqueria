import React from "react";
import { FaCalendarAlt, FaWhatsapp, FaBell, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaCalendarAlt className="text-3xl text-indigo-600" />,
    title: "Reservas Online",
    description: "Tus clientes pueden agendar citas desde cualquier dispositivo, 24/7.",
  },
  {
    icon: <FaWhatsapp className="text-3xl text-green-500" />,
    title: "Integración con WhatsApp e Instagram",
    description: "Automatiza respuestas y gestiona mensajes desde tus redes sociales.",
  },
  {
    icon: <FaBell className="text-3xl text-yellow-500" />,
    title: "Alertas por SMS y Email",
    description: "Envía recordatorios automáticos para reducir cancelaciones.",
  },
  {
    icon: <FaChartLine className="text-3xl text-pink-500" />,
    title: "Reportes y estadísticas",
    description: "Obtén datos útiles sobre tu negocio en tiempo real.",
  },
];

const Home = () => {
  return (
    
    <section className="bg-white py-16 px-4" id="features">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          ¿Qué ofrece nuestro sistema?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-700">{feature.title}</h3>
              <p className="text-gray-500 mt-2 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
