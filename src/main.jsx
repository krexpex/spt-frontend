// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HashRouter } from 'react-router-dom'; // Используем HashRouter вместо BrowserRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
