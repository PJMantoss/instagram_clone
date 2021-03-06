import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let firebaseConfig = {
//   apiKey: "AIzaSyC1MIR55EmC-37J7oDhQ3xNWct24HYzlNo",
//   authDomain: "instagram-clone-9b6ce.firebaseapp.com",
//   projectId: "instagram-clone-9b6ce",
//   storageBucket: "instagram-clone-9b6ce.appspot.com",
//   messagingSenderId: "590328505704",
//   appId: "1:590328505704:web:a2d6af91107b56901422dd"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
