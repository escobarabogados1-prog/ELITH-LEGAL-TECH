import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el diseño que está al lado

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // <--- AGREGA ESTA LÍNEA AQUÍ

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
