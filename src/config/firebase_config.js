// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSY_dR0focwIX4ofQntAsycssX5vw9E8g",
  authDomain: "carea-3407e.firebaseapp.com",
  projectId: "carea-3407e",
  storageBucket: "carea-3407e.appspot.com",
  messagingSenderId: "579181083486",
  appId: "1:579181083486:web:e2bb2844c842e671bb2dcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { db, auth, storage };
