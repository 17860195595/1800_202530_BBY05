// Firebase SDK imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Add SDKs for Firebase products as needed:
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBgobrW_SzqAVxxQI-GP-xibMJUz4Znz3E", // Replace with your API key (prefer env)
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "bby05project.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "bby05project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "bby05project.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdefghijklmnop",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://bby05project-default-rtdb.firebaseio.com/"
};

console.log('Firebase config:', {
  ...firebaseConfig,
  apiKey: firebaseConfig.apiKey.substring(0, 10) + '...' // show only first 10 chars for debugging
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Firestore with error handling
let db;
try {
  db = getFirestore(app);
  console.log('Firebase Firestore initialized successfully');
} catch (error) {
  console.error('Failed to initialize Firebase Firestore:', error);
  db = null;
}
export { db };