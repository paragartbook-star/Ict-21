import React from 'react';
import './index.css';  // ये लाइन ऐड करो
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css'; // अगर CSS है तो (ऑप्शनल)

if (darkMode) document.documentElement.classList.add('dark');
else document.documentElement.classList.remove('dark');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);