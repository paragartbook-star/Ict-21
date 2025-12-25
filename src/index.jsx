import React from 'react';
import './index.css';  // ये लाइन ऐड करो
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // अगर CSS है तो (ऑप्शनल)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);