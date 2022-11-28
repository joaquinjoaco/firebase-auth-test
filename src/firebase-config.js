// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyAiKPYctI058B6G_g3hS3by-6vjn1V9gqY",
     authDomain: "blogproject-3ebcb.firebaseapp.com",
     projectId: "blogproject-3ebcb",
     storageBucket: "blogproject-3ebcb.appspot.com",
     messagingSenderId: "340657295071",
     appId: "1:340657295071:web:e5052bbe23c535ebaba36a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();