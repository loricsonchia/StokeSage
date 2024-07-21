import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCI0IZ547bAfrVO5pAyyua7xOoxGXHqzfU",
  authDomain: "stocksage-98852.firebaseapp.com",
  projectId: "stocksage-98852",
  storageBucket: "stocksage-98852.appspot.com",
  messagingSenderId: "502514783503",
  appId: "1:502514783503:web:ec1f4aa43adb1d48935a7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
