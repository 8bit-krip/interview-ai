import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPI6ZlYWjKE9PFluU3PJFgoOtTebcMBIc",
  authDomain: "interview-ai-917f8.firebaseapp.com",
  projectId: "interview-ai-917f8",
  storageBucket: "interview-ai-917f8.firebasestorage.app",
  messagingSenderId: "1032240889176",
  appId: "1:1032240889176:web:85ead00b7e6abd8405792d",
  measurementId: "G-0F579EXBQZ"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);