// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBxkuT-PEOSMMDj7rykNdm-hb54owvnEJA",
    authDomain: "placemate-db.firebaseapp.com",
    projectId: "placemate-db",
    storageBucket: "placemate-db.firebasestorage.app",
    messagingSenderId: "56706616861",
    appId: "1:56706616861:web:5faa055ef49d8aa6ea80f4",
    measurementId: "G-28E8DKT9E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();