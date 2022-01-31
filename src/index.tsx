import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/compat/app';
<<<<<<< HEAD
import { FirebaseConfig } from './utils/ApplicationConstants';
=======
import {FirebaseConfig} from './utils/ApplicationConstants';
>>>>>>> 4fb66e0e9617e40df64f7bfbe6788bd97ad0c7de


firebase.initializeApp(FirebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
