// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5HPT_LwN9BhN9cj54oXzjqwpK6D3Cg7Y",
  authDomain: "nba-newsletter-46c7a.firebaseapp.com",
  projectId: "nba-newsletter-46c7a",
  storageBucket: "nba-newsletter-46c7a.appspot.com",
  messagingSenderId: "899078944871",
  appId: "1:899078944871:web:39d967c3e588576649bcc2",
  measurementId: "G-VPVXR9FX6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
