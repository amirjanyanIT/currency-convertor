import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { interceptorsInit } from './fastForex.io';

interceptorsInit();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);