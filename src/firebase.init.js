// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHzi9c9cyPhFjbByfSVE57DniBOD8Jy4Y",
  authDomain: "bicycle-warehouse-d6a15.firebaseapp.com",
  projectId: "bicycle-warehouse-d6a15",
  storageBucket: "bicycle-warehouse-d6a15.appspot.com",
  messagingSenderId: "221018810471",
  appId: "1:221018810471:web:d0853b04cd274757728cc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;