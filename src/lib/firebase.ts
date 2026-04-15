import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJY5NLOJKI9C8C319nH1mRRqyz740K7mU",
  authDomain: "medescuento-1a2ff.firebaseapp.com",
  projectId: "medescuento-1a2ff",
  storageBucket: "medescuento-1a2ff.firebasestorage.app",
  messagingSenderId: "246539507592",
  appId: "1:246539507592:web:bbf08f6aa8c8574b684c3d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);