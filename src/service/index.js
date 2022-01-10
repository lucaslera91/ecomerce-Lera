// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import reactDom from "react-dom";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
//import App from './App';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL3OtFZh79Cgd6yTpxGTtOZbLYhYRG3EQ",
  authDomain: "ecomerce-lera.firebaseapp.com",
  projectId: "ecomerce-lera",
  storageBucket: "ecomerce-lera.appspot.com",
  messagingSenderId: "942289633590",
  appId: "1:942289633590:web:4ab6c649d8eadb813bf397",
  measurementId: "G-TXT6N4DMQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app)

export default db