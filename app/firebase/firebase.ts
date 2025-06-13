
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyAnP8oLcPFcZshqOJkBKu8_AkOTe2QJ8Zw",
  authDomain: "nextpr-caefc.firebaseapp.com",
  projectId: "nextpr-caefc",
  storageBucket: "nextpr-caefc.firebasestorage.app",
  messagingSenderId: "359855059537",
  appId: "1:359855059537:web:b7f5a7b56ca000ce363e70",
  measurementId: "G-KPE1E5MZ66"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();