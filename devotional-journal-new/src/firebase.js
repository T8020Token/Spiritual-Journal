import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4dW4nnm1oqFoZvLloSHpSpio4FYJg2jo",
  authDomain: "devotional-journal-new.firebaseapp.com",
  projectId: "devotional-journal-new",
  storageBucket: "devotional-journal-new.firebasestorage.app",
  messagingSenderId: "652362293319",
  appId: "1:652362293319:web:fb94d04a81d6df3d6c9162",
  measurementId: "G-HRXM9M50CQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };