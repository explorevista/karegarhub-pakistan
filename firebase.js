/**
 * firebase.js – Firebase v10 Modular SDK (Production Ready)
 * GharFix Pakistan – Home Services Platform
 * 
 * ✅ Auth: Email/Password
 * ✅ Firestore: users, workers, support_requests
 * ✅ No phone auth, no Google auth (as requested)
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  getFirestore,
  doc, setDoc, getDoc, updateDoc, deleteDoc,
  collection, addDoc, getDocs, query, where, orderBy, serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔐 Firebase Config (EXACT from your project)
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

// Export all functions for app.js
export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  doc, setDoc, getDoc, updateDoc, deleteDoc,
  collection, addDoc, getDocs, query, where, orderBy, serverTimestamp
};

console.log("✅ Firebase initialized – GharFix Pakistan");
