import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AQUÍ_TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "XXXXXXXX",
  appId: "XXXXXXXX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export { doc, getDoc, updateDoc, increment, setDoc };