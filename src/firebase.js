import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhB45BUKltAoC-Opbu1kSGlE807LfAb_c",
  authDomain: "twitter-clone-a4321.firebaseapp.com",
  projectId: "twitter-clone-a4321",
  storageBucket: "twitter-clone-a4321.appspot.com",
  messagingSenderId: "250043895401",
  appId: "1:250043895401:web:c15160aae67f1a1d445cf8",
  measurementId: "G-96Y2D0J61L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
// const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebaseApp.auth().signInWithPopup(provider);

export default db;
