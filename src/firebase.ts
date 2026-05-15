import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyZQ_MOfTRVKszrTlyuq9c2yvLxoszzfE",
  authDomain: "cibo-a0869.firebaseapp.com",
  projectId: "cibo-a0869",
  storageBucket: "cibo-a0869.firebasestorage.app",
  messagingSenderId: "29025198445",
  appId: "1:29025198445:web:96ff794f6cc8bd5e5aba64",
  measurementId: "G-377NJ9J9MV",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
