// firebase.js - Firebase v10 Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, updateDoc, collection, addDoc, getDocs, query, where, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ⚠️ YAHAN APNA FIREBASE CONFIG PASTE KAREIN (Step 1.4 se copy kiya hua)
const firebaseConfig = {
  apiKey: "AIzaSyCu-7TW6L_vyvWKt0AXn8VmFBq0GLy9jUQ",
  authDomain: "gharfix-pakistan.firebaseapp.com",
  projectId: "gharfix-pakistan",
  storageBucket: "gharfix-pakistan.firebasestorage.app",
  messagingSenderId: "317551476048",
  appId: "1:317551476048:web:c404154a010fcf4fcb4055"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Export functions
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  doc, setDoc, getDoc, updateDoc,
  collection, addDoc, getDocs, query, where, serverTimestamp
};

console.log("✅ Firebase Connected Successfully!");
