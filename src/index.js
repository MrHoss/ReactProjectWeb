import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import './index.css';
import Header from './components/Structure/Header.jsx';
import Footer from './components/Structure/Footer';


ReactDOM.render(
  <Header />,
  document.getElementById('header'),
);
ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
