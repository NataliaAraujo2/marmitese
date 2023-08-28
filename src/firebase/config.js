// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd63SoFfXvhLh-Im9Xpsk2c0J3yH_S60k",
  authDomain: "marmite-se.firebaseapp.com",
  projectId: "marmite-se",
  storageBucket: "marmite-se.appspot.com",
  messagingSenderId: "467385794206",
  appId: "1:467385794206:web:063a9d40189b72b01a058f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };
