// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3NDrLAxOVMNdT5mH6D4QXC12kljpvaP0",
  authDomain: "doctor-service-45010.firebaseapp.com",
  projectId: "doctor-service-45010",
  storageBucket: "doctor-service-45010.appspot.com",
  messagingSenderId: "283316180008",
  appId: "1:283316180008:web:ddf2beaef213ba38d6d11d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messaginSenderId,
//   appId: process.env.REACT_APP_apId
// };