import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from "./providers";

import App from './App';

import ThemeSelector from './style/theme/ThemeSelector';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <ThemeSelector>
        <App />
      </ThemeSelector>
    </React.StrictMode>
  </Provider>
);

