import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMLn3-VYf_EGSPwjNM7ezOLwCUBV8wk-c",
  authDomain: "eduney.firebaseapp.com",
  projectId: "eduney",
  storageBucket: "eduney.firebasestorage.app",
  messagingSenderId: "119344847803",
  appId: "1:119344847803:web:6de94f321283e21960829e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };