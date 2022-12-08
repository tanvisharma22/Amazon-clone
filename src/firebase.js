import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCfv3_1-Md8EaGr2iRVM7VStdQYR7DZ7m8",
    authDomain: "clone-fc45d.firebaseapp.com",
    projectId: "clone-fc45d",
    storageBucket: "clone-fc45d.appspot.com",
    messagingSenderId: "582512576919",
    appId: "1:582512576919:web:34e4734cbb246763f35cd2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };