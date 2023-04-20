// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPEEXQxRj6qVNY7Zp3khznFNY4-QRKAiY",
  authDomain: "designdifferentgraphics.firebaseapp.com",
  projectId: "designdifferentgraphics",
  storageBucket: "designdifferentgraphics.appspot.com",
  messagingSenderId: "182059100992",
  appId: "1:182059100992:web:086ce4013b7c711f7068a5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();
const fs = getFirestore();

export { auth, storage, fs };
