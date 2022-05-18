import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GlobalNav from './components/GlobalNav';
import reportWebVitals from './reportWebVitals';
import Button from './Button';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalNav />
  </React.StrictMode>
);

reportWebVitals();
