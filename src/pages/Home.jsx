import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Peluquería SaaS</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#services" className="hover:text-indigo-400">Servicios</a></li>
              <li><a href="#about" className="hover:text-indigo-400">Sobre Nosotros</a></li>
              <li><a href="#contact" className="hover:text-indigo-400">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">¡Bienvenido a nuestra peluquería!</h1>
          <p className="mb-6">Reserva tu cita en línea de manera fácil y rápida.</p>
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-400">Reserva ahora</button>
        </div>
      </section>

      {/* Servicios */}
      <section id="services" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Corte de Pelo</h3>
              <p>Realizamos cortes de pelo a la moda para hombres y mujeres.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Coloración</h3>
              <p>Colores vibrantes y tratamientos de color para un look perfecto.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tratamientos Capilares</h3>
              <p>Tratamientos profundos para mantener tu cabello saludable y brillante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonios</h2>
          <div className="flex space-x-6 justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="italic">"Excelente servicio, siempre me dejan el cabello perfecto. ¡Muy recomendados!"</p>
              <p className="mt-4 font-semibold">Juan Pérez</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <p className="italic">"La atención es increíble, me encanta cómo me cuidan el cabello cada vez que voy."</p>
              <p className="mt-4 font-semibold">Ana Gómez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Peluquería SaaS. Todos los derechos reservados.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://wa.me/123456789" className="text-white hover:text-indigo-400">WhatsApp</a>
            <a href="https://www.instagram.com/your_salon" className="text-white hover:text-indigo-400">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
