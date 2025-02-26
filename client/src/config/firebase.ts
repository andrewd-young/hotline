// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOHtRddU7Sb5fxfZXinQQVWWNqyyxRHGo",
  authDomain: "hotline-a6ab9.firebaseapp.com",
  projectId: "hotline-a6ab9",
  storageBucket: "hotline-a6ab9.firebasestorage.app",
  messagingSenderId: "826998751537",
  appId: "1:826998751537:web:a8577ad5aba062f620f010",
  measurementId: "G-ZN8F6VK735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)