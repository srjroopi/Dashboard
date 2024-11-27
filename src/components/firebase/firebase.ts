// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtysGyoS9vbgTvFjtzn5h-a-lPtzElUZo",
  authDomain: "dashboard-7a3d7.firebaseapp.com",
  projectId: "dashboard-7a3d7",
  storageBucket: "dashboard-7a3d7.firebasestorage.app",
  messagingSenderId: "699877491555",
  appId: "1:699877491555:web:2701a3c78497508c8e4956",
  measurementId: "G-RTMPCBXVPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };