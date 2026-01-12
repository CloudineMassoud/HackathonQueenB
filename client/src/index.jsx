import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './styles/global.css'; 
import App from './App.jsx';
import { BigSisProvider } from './context/BigSisContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BigSisProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BigSisProvider>
  </React.StrictMode>
);

