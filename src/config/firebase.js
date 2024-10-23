// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "irfan-express-abf43.firebaseapp.com",
  projectId: "irfan-express-abf43",
  storageBucket: "irfan-express-abf43.appspot.com",
  messagingSenderId: "1059210187098",
  appId: "1:1059210187098:web:6dd4a1c613a9d58deb2363",
  measurementId: "G-V1D77P12JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)