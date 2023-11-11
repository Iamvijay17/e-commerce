
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBKGkJkBSN9RZTN5ETtsSilAQrmg96NIKc",
  authDomain: "e-commerce-6e209.firebaseapp.com",
  projectId: "e-commerce-6e209",
  storageBucket: "e-commerce-6e209.appspot.com",
  messagingSenderId: "877912571256",
  appId: "1:877912571256:web:7e048e7640696c6cde9c8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)