// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCctKhvQMC9cVuUdgfYQHLssSMeViw1g88",
  authDomain: "fresh-grub-3a3fb.firebaseapp.com",
  projectId: "fresh-grub-3a3fb",
  storageBucket: "fresh-grub-3a3fb.appspot.com",
  messagingSenderId: "161824191190",
  appId: "1:161824191190:web:9da1c45f6c3c4efa7d4f77",
  measurementId: "G-TTFV3EJTH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);