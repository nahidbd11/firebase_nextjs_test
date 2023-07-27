// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDeFXYpi12_lCz6TO4KRQHUf2G6bRW6fCY",
  authDomain: "task-management-73523.firebaseapp.com",
  projectId: "task-management-73523",
  storageBucket: "task-management-73523.appspot.com",
  messagingSenderId: "284626093837",
  appId: "1:284626093837:web:6a864ad38707d9566a1244",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
