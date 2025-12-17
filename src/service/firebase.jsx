// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxXfRFhAT9vvF1wh-8bEhVLSQGLs3aSbs",
  authDomain: "ela-decoracion.firebaseapp.com",
  projectId: "ela-decoracion",
  storageBucket: "ela-decoracion.firebasestorage.app",
  messagingSenderId: "222315414534",
  appId: "1:222315414534:web:eca8eeb333545ee443af87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);