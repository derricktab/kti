import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFt3gDJzQuq2GzOgpMTqs8cSj7rE3Glyg",
    authDomain: "kyadondo-technical-institute.firebaseapp.com",
    projectId: "kyadondo-technical-institute",
    storageBucket: "kyadondo-technical-institute.appspot.com",
    messagingSenderId: "709220449551",
    appId: "1:709220449551:web:21c7d9319f29763bd9927a",
    measurementId: "G-BP4EX9PQ3C"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
