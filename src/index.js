import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';        // Keep this for global styles
import './App.css';          // Keep this if App.css has component styles
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance measuring
reportWebVitals();
