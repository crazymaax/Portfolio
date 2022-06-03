import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from "./providers";

import App from './App';

import ThemeSelector from './style/theme/ThemeSelector';

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
    <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
      <ThemeSelector>
        <App />
      </ThemeSelector>
    </React.StrictMode>
  </Provider>
);

