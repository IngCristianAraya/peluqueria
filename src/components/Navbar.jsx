import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          Peluquería SaaS
        </div>

        {/* Links de navegación */}
        <nav className="space-x-6 hidden md:block">
          <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">Características</a>
          <a href="#precios" className="text-gray-700 hover:text-indigo-600 transition">Precios</a>
          <a href="#contacto" className="text-gray-700 hover:text-indigo-600 transition">Contacto</a>
        </nav>

        {/* Botón de login */}
        <div className="hidden md:block">
          <a href="/login" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Iniciar sesión
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
