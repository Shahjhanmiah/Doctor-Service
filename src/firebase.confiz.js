// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8c25-s8ZrtFT9JoGlyhiCAiCUMF64bGE",
  authDomain: "our-doctor-service.firebaseapp.com",
  projectId: "our-doctor-service",
  storageBucket: "our-doctor-service.appspot.com",
  messagingSenderId: "678545885040",
  appId: "1:678545885040:web:a152801e3461fb385fb1b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app