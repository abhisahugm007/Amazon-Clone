import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDsyqT6pYzVg-KJ6M-bKP46zwNy3cX30p0",
  authDomain: "challenge-3c761.firebaseapp.com",
  databaseURL: "https://challenge-3c761.firebaseio.com",
  projectId: "challenge-3c761",
  storageBucket: "challenge-3c761.appspot.com",
  messagingSenderId: "295424177580",
  appId: "1:295424177580:web:09d9861d0194f19e993609",
  measurementId: "G-2E1GK9CJN8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
