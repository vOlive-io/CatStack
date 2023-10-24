// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdfTL4-krSlj4b2x2gIzqfC2iepZia7vA",
  authDomain: "cat-stack-5e4c4.firebaseapp.com",
  projectId: "cat-stack-5e4c4",
  storageBucket: "cat-stack-5e4c4.appspot.com",
  messagingSenderId: "295664535439",
  appId: "1:295664535439:web:150901559bd5a36528adfa",
  measurementId: "G-9KLK1YLKTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
