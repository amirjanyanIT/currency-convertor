import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { interceptorsInit } from './fastForex.io';
import { BrowserRouter } from 'react-router-dom';
interceptorsInit();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);