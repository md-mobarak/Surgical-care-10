// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZZfUCnFBLZgaqmmGF_uZTuJx36qWx9Fk",
    authDomain: "complete-surgical-care.firebaseapp.com",
    projectId: "complete-surgical-care",
    storageBucket: "complete-surgical-care.appspot.com",
    messagingSenderId: "1040820742418",
    appId: "1:1040820742418:web:d9a3b04301ae865eaa6bcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;