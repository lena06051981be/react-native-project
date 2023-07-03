import AsyncStorage from "@react-native-async-storage/async-storage";

import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getReactNativePersistence } from "firebase/auth/react-native";

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";


const firebaseConfig = {
    apiKey: "AIzaSyAkZy8rWvNUu6z_3mWbKvYgIKO8kgCHrYQ",
    authDomain: "react-native-photo-notes-eb494.firebaseapp.com",
    projectId: "react-native-photo-notes-eb494",
    storageBucket: "react-native-photo-notes-eb494.appspot.com",
    messagingSenderId: "441362587604",
    appId: "1:441362587604:web:e4b5ae4742acfbd51d8041",
    // measurementId: "G-JN599YHQQL",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});
