import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you're using React 18 or newer
import App from './App';
import './index.css'; // Import global styles (including Tailwind CSS)
const root = ReactDOM.createRoot(document.getElementById('root')); // Get the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
