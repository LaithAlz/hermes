import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfKAJytaFq-YzLV1JYKaAaeSqPtSNYJsM",
  authDomain: "hermes-607cd.firebaseapp.com",
  projectId: "hermes-607cd",
  storageBucket: "hermes-607cd.appspot.com",
  messagingSenderId: "709794142224",
  appId: "1:709794142224:web:d960930905e8dcfcd55295",
  measurementId: "G-NPLQ5LVTYF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = () => {
  return auth.signOut();
};
