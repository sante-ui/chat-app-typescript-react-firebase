// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNLEKVVnvVVmdw6mVaN0ysimpmn6k6f5k",
  authDomain: "chat-app-6527a.firebaseapp.com",
  projectId: "chat-app-6527a",
  storageBucket: "chat-app-6527a.appspot.com",
  messagingSenderId: "366925873538",
  appId: "1:366925873538:web:919d9b6767127910f8cf9b",
  measurementId: "G-5KSVZWNPZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);