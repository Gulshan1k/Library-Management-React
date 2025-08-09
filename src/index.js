// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';       // Note: '/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// 1. Grab the root container from your HTML
const container = document.getElementById('root');

// 2. Create a React root
const root = ReactDOM.createRoot(container);

// 3. Render your App into it
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);