import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt_X7yvws_BTB0gMngu-guXyH1dtjREW4",
  authDomain: "netflix-e82b1.firebaseapp.com",
  projectId: "netflix-e82b1",
  storageBucket: "netflix-e82b1.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "38786892343",
  appId: "1:38786892343:web:062a4de104745ecb1475b2",
  measurementId: "G-DYZYGKJJQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);