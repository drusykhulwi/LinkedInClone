//import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgPjlCk0dZitFHU4yTo7Oz-bYb-iK8uFU",
  authDomain: "linkedinn-clone-9cf46.firebaseapp.com",
  projectId: "linkedinn-clone-9cf46",
  storageBucket: "linkedinn-clone-9cf46.appspot.com",
  messagingSenderId: "46638429596",
  appId: "1:46638429596:web:98dfd034c1088ea0d50459",
};

const firebaseApp = initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
//const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
//const auth = firebase.auth();

export { db, auth };
