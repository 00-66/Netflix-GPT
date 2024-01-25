// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdG6nq1piY0nFmHX1bUUmHHSyXSz_T8EM",
  authDomain: "netflixgpt-be8f1.firebaseapp.com",
  projectId: "netflixgpt-be8f1",
  storageBucket: "netflixgpt-be8f1.appspot.com",
  messagingSenderId: "829081257759",
  appId: "1:829081257759:web:6ff3191b23cbbe07f5522a",
  measurementId: "G-9B3DRZ9DGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();