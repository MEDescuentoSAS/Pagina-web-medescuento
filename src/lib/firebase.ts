import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment,
  setDoc
} from "firebase/firestore";

// Tu configuración de Firebase (la que te dio Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyDJY5NLOJKI9C8C319nH1mRRqyz740K7mU",
  authDomain: "medescuento-1a2ff.firebaseapp.com",
  projectId: "medescuento-1a2ff",
  storageBucket: "medescuento-1a2ff.firebasestorage.app",
  messagingSenderId: "246539507592",
  appId: "1:246539507592:web:bbf08f6aa8c8574b684c3d"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar Firestore
export const db = getFirestore(app);

// Exportar funciones necesarias
export { doc, getDoc, updateDoc, increment, setDoc };