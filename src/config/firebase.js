import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB86toEWA-BqUgtnUELXmdb7hlcbj37ejs",
  authDomain: "tiktok-fde71.firebaseapp.com",
  projectId: "tiktok-fde71",
  storageBucket: "tiktok-fde71.appspot.com",
  messagingSenderId: "452079808323",
  appId: "1:452079808323:web:af2314462c0d4fd3d1c9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db