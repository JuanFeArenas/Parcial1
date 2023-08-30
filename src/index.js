import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Punto1 from "./punto1";
import Punto2 from "./punto2";
import Punto3 from "./punto3";


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Punto1/>
    <Punto2/>
    <Punto3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
