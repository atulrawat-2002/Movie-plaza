// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj5XubGgE_13MwgqGLPKIjRJjFoyvxY7w",
  authDomain: " ",
  projectId: "movie-plaza-f2a2c",
  storageBucket: "movie-plaza-f2a2c.firebasestorage.app",
  messagingSenderId: "870989802340",
  appId: "1:870989802340:web:83cd0453d933302d66a871",
  measurementId: "G-5T234D0PBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();