// Importing necessary modules from React library
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing the main component of the application

// Rendering the App component into the root HTML element of the document
ReactDOM.render(
  // Enabling strict mode for additional checks and warnings during development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Getting the root element by its ID to render the application
  document.getElementById('root')
);
