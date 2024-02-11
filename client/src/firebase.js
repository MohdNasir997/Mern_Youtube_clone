// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "video-app-b7950.firebaseapp.com",
  projectId: "video-app-b7950",
  storageBucket: "video-app-b7950.appspot.com",
  messagingSenderId: "10234366388",
  appId: "1:10234366388:web:e11f8925fe735f8d14cae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;