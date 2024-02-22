// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUkeq8mljEGxVQ3fNxX8_nkDRI80D-C8Y",
  authDomain: "ecommercesantiagoaltieri.firebaseapp.com",
  projectId: "ecommercesantiagoaltieri",
  storageBucket: "ecommercesantiagoaltieri",
  messagingSenderId: "1098096763327",
  appId: "1:1098096763327:web:3dc47b2b32bacbca10c10a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)