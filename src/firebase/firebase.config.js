// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJABsJ3itGiyJ5T9L3wZUMVupV2QYQMc8",
  authDomain: "redwan-event-management.firebaseapp.com",
  projectId: "redwan-event-management",
  storageBucket: "redwan-event-management.appspot.com",
  messagingSenderId: "373619824622",
  appId: "1:373619824622:web:1f6679169e3149a7a820ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 