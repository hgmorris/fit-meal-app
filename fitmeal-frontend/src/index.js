import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global CSS
import App from './App'; // Main App component
import { BrowserRouter as Router } from 'react-router-dom'; // React Router

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root') // The div with id="root" in public/index.html
);

