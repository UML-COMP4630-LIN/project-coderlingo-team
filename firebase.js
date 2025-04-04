// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCie5s8zuu1rbH6tVPHo85HqzHXWz85YeY",
  authDomain: "coderlingo-ccda0.firebaseapp.com",
  projectId: "coderlingo-ccda0",
  storageBucket: "coderlingo-ccda0.firebasestorage.app",
  messagingSenderId: "280907580548",
  appId: "1:280907580548:web:53c31e466d94694e3a6ed1",
  measurementId: "G-TY88H9B6R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);