import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgcov8ik99eSnNolJZPL1SWsiA16Mfufk",
  authDomain: "chat-77d17.firebaseapp.com",
  projectId: "chat-77d17",
  storageBucket: "chat-77d17.appspot.com",
  messagingSenderId: "227940986287",
  appId: "1:227940986287:web:cd77d39fe409a9134d135a",
  measurementId: "G-6DSGH2MW13",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
