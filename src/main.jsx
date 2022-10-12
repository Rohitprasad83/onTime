import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NhostReactProvider } from '@nhost/react';
import nhost from './utils/nhostConfig.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NhostReactProvider nhost={nhost}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NhostReactProvider>
  </React.StrictMode>
);
