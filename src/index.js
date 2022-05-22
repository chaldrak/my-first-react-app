import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GlobalNav from './components/GlobalNav';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GlobalNav />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
