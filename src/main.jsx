import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home.jsx'; // Importa la landing page
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
