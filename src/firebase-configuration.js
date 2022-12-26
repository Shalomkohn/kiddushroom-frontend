// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxKLMxUXdvqdFMa-vwvbvmXvOpR-hMYM4",
  authDomain: "jewish-wellness.firebaseapp.com",
  projectId: "jewish-wellness",
  storageBucket: "jewish-wellness.appspot.com",
  messagingSenderId: "378731244660",
  appId: "1:378731244660:web:77bf9e3270224e3323b521",
  measurementId: "G-47RTY5CQQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()