// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyACRKd4IWkBtnz2uHhc8q5Bk__zjVxpa5M",
  authDomain: "fir-project-39954.firebaseapp.com",
  projectId: "fir-project-39954",
  storageBucket: "fir-project-39954.appspot.com",
  messagingSenderId: "1081047294623",
  appId: "1:1081047294623:web:8e0985071d7fcbebbe38aa",
  measurementId: "G-X18T1D8YMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

// Export the necessary modules
export { auth, provider, storage };
export default db;
