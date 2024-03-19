import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAwDkWsmcZbv6GmBanc1UXWyxfLwfWoZa4",
  authDomain: "noodles-shop.firebaseapp.com",
  projectId: "noodles-shop",
  storageBucket: "noodles-shop.appspot.com",
  messagingSenderId: "1086415677133",
  appId: "1:1086415677133:web:b74b65d87b8751ce79ab84"
};

const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);