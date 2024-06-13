import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxe1mjZEz9D0DX9DyG7MYXqd2Tg1OQ670",
  authDomain: "clone-d7099.firebaseapp.com",
  projectId: "clone-d7099",
  storageBucket: "clone-d7099.appspot.com",
  messagingSenderId: "22797787545",
  appId: "1:22797787545:web:9ba2fd4ae77cccf3993308",
  measurementId: "G-NZMR1VSZFJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
