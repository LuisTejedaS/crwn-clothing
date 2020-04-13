import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAoOlpKNbUdgp_U-U3WV4clg-ng5euCWGw",
  authDomain: "crwn-db-21372.firebaseapp.com",
  databaseURL: "https://crwn-db-21372.firebaseio.com",
  projectId: "crwn-db-21372",
  storageBucket: "crwn-db-21372.appspot.com",
  messagingSenderId: "903919404222",
  appId: "1:903919404222:web:10a261fa0b658b6e7a4aef",
  measurementId: "G-Z3P4HQEXY5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
