// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDld99UTYQdFcRcxFjMz40ICWDJamUMolw",
  authDomain: "coffee-house-8191a.firebaseapp.com",
  projectId: "coffee-house-8191a",
  storageBucket: "coffee-house-8191a.firebasestorage.app",
  messagingSenderId: "203904688255",
  appId: "1:203904688255:web:1067de8ac3dc9e0b791f4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
