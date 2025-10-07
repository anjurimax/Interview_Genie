// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxHPMPhgB-bSMHu5XZjqdWUQIK-Jnu2pM",
  authDomain: "interviewgenie-e0492.firebaseapp.com",
  projectId: "interviewgenie-e0492",
  storageBucket: "interviewgenie-e0492.appspot.com",
  messagingSenderId: "708110374509",
  appId: "1:708110374509:web:74400aba1fd931a3351164",
  measurementId: "G-XTDGRHVXW6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
