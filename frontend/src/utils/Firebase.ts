// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnIz6aUA1N2sCpmQ5Qf7EDNEcPA-XCnXs",
  authDomain: "code-to-give-earth-day.firebaseapp.com",
  projectId: "code-to-give-earth-day",
  storageBucket: "code-to-give-earth-day.appspot.com",
  messagingSenderId: "32068536531",
  appId: "1:32068536531:web:4977ab31acf908fceeec26",
  measurementId: "G-X9X8ZJXVD7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
