import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.css';
import App from './App';
import reportWebVitals from './components/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();