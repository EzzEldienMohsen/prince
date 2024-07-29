import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

import { ToastContainer } from 'react-toastify';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <HelmetProvider>
  <I18nextProvider i18n={i18n}>
    <App />
    <ToastContainer position="top-center" autoClose={2000} />
  </I18nextProvider>
  </HelmetProvider>
  </>
);
