// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAm0DGgzchAQQCJ2OH5JeK7l8_oaOWROzU",
   authDomain: "fitness-app-23fd9.firebaseapp.com",
   projectId: "fitness-app-23fd9",
   storageBucket: "fitness-app-23fd9.appspot.com",
   messagingSenderId: "166576063746",
   appId: "1:166576063746:web:dd3ac958f96f1837372e1b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
