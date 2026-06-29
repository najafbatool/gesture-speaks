import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsGL6pCd7bzCWIEhIVy7qh4szXG5N5r9k",
  authDomain: "gesture-speaks-dab6c.firebaseapp.com",
  projectId: "gesture-speaks-dab6c",
  storageBucket: "gesture-speaks-dab6c.firebasestorage.app",
  messagingSenderId: "192499378185",
  appId: "1:192499378185:web:c27415a706e98b9b6130d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();