
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBRbU6yE3OhGPtIgio7KIGvIdd4u2i3Kug",
  authDomain: "projetoorcafacil.firebaseapp.com",
  projectId: "projetoorcafacil",
  storageBucket: "projetoorcafacil.firebasestorage.app",
  messagingSenderId: "1016944256531",
  appId: "1:1016944256531:web:a7bc910f5e3917b14901e6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
