import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcv4PdY_YZH_wWjt3T7_lyRGhX3wrh6Z0",
  authDomain: "leve-book.firebaseapp.com",
  projectId: "leve-book",
  storageBucket: "leve-book.appspot.com",
  messagingSenderId: "406182333254",
  appId: "1:406182333254:web:d4d7b0f38a5dfc0e32b347"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { auth, firestore, firebaseApp };
