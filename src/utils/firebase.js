// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRIpMuiyGq4OHwtAZx1F8Y0VR6464NVKQ",
  authDomain: "netflixgpt-54cee.firebaseapp.com",
  projectId: "netflixgpt-54cee",
  storageBucket: "netflixgpt-54cee.appspot.com",
  messagingSenderId: "302656189279",
  appId: "1:302656189279:web:553fafa13f7f593d55fcea",
  measurementId: "G-SV56R38WPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();