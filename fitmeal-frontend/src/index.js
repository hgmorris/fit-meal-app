
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your CSS file
import App from './App'; // Import your main App component
import { AuthProvider } from './context/AuthContext'; // Import your AuthProvider for context

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);