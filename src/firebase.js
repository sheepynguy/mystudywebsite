// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgTYz3QbBEB2ue76-wz9Uai9GWR8f_bio",
  authDomain: "study-website-solo.firebaseapp.com",
  projectId: "study-website-solo",
  storageBucket: "study-website-solo.appspot.com",
  messagingSenderId: "314159151659",
  appId: "1:314159151659:web:01ab49f25eb513a957886e",
  measurementId: "G-513Y7FTEV9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);