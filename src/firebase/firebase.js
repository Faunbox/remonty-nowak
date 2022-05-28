// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyANJl160mGYzTTAFxQoOQzLUgg_qOPvLlI",
  authDomain: "nowak-beab5.firebaseapp.com",
  projectId: "nowak-beab5",
  storageBucket: "nowak-beab5.appspot.com",
  messagingSenderId: "408086510478",
  appId: "1:408086510478:web:090d611aacb79d854282df",
  measurementId: "G-S6RKCGP5TM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
getPerformance(app);

export const db = getFirestore(app);
