// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1f0y71Ff-7VJlgBx_MUNTNVc2CZoXVAE",
  authDomain: "wride-interview-app.firebaseapp.com",
  projectId: "wride-interview-app",
  storageBucket: "wride-interview-app.appspot.com",
  messagingSenderId: "66637597328",
  appId: "1:66637597328:web:dd982106ed4a80725b6615",
  measurementId: "G-18YPHG8Q20",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
