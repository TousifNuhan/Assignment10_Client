// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoewcIodyRLGtj_-fCC1yLDGE2C8Orpqg",
  authDomain: "assignment-10-f230e.firebaseapp.com",
  projectId: "assignment-10-f230e",
  storageBucket: "assignment-10-f230e.appspot.com",
  messagingSenderId: "325747507806",
  appId: "1:325747507806:web:a4c6d3d4f1c397f9346acf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth