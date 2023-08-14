import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.RREACT_APP_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.REACT_APP_FIREBASE_APP_ID || '',
  measurementId: process.env.REACT_APP_FIREBASE_MEASURE_ID || ''
}; */

const firebaseConfig = {
  apiKey: "AIzaSyBmDulBJoIf0_WNlTaHKongPcAqeLfdK40",
  authDomain: "aqualife-e93c1.firebaseapp.com",
  projectId: "aqualife-e93c1",
  storageBucket: "aqualife-e93c1.appspot.com",
  messagingSenderId: "873380815817",
  appId: "1:873380815817:web:d8ad976b97c0df1f27be18",
  measurementId: "G-W1NT136FYW"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  
);

