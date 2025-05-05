import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Gestiona tu peluquería <br /> de forma inteligente
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Sistema de reservas online, alertas automáticas, integración con WhatsApp e Instagram,
          todo en un solo lugar.
        </p>
        <a
          href="#precios"
          className="bg-white text-indigo-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
        >
          Comienza ahora
        </a>
      </div>
    </section>
  );
};

export default Hero;
