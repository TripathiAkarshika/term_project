// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArQOoKYhpVfFuLbHH5EgRdz9dKh94917Y",
    authDomain: "webfinal-a5051.firebaseapp.com",
    projectId: "webfinal-a5051",
    storageBucket: "webfinal-a5051.appspot.com", // Corrected storageBucket
    messagingSenderId: "498250087256",
    appId: "1:498250087256:web:589d5af4b8082c0cc0432d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app); // Pass the app instance
export const db = getFirestore(app);
export default app;
