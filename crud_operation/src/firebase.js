import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJ1lBtMVvoZAK7Vt3E76AqcySa2atL4eM",
  authDomain: "crud-demo-42dbe.firebaseapp.com",
  projectId: "crud-demo-42dbe",
  storageBucket: "crud-demo-42dbe.appspot.com",
  messagingSenderId: "148140562710",
  appId: "1:148140562710:web:361afcfed4fa3a1147d837",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
