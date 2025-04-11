// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt_X7yvws_BTB0gMngu-guXyH1dtjREW4",
  authDomain: "netflix-e82b1.firebaseapp.com",
  projectId: "netflix-e82b1",
  storageBucket: "netflix-e82b1.firebasestorage.app",
  messagingSenderId: "38786892343",
  appId: "1:38786892343:web:062a4de104745ecb1475b2",
  measurementId: "G-DYZYGKJJQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);