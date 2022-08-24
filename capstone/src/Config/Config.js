import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDKZ0G9qrqtY7Msmlix0s8zv2RUXmm_nnw",
  authDomain: "fir-ecom-78c2a.firebaseapp.com",
  projectId: "fir-ecom-78c2a",
  storageBucket: "fir-ecom-78c2a.appspot.com",
  messagingSenderId: "307156408093",
  appId: "1:307156408093:web:53f3edacc8a513817ff3f4",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };
