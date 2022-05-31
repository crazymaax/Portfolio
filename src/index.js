import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from "./providers";

import { GlobalStyle } from "./style/GlobalStyle.js"

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </Provider>
);

