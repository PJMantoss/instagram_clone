import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebase, fieldValue } from './lib/firebase';
import FirebaseContext from './context/firebase';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
