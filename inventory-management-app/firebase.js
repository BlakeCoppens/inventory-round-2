import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyArU1woVZrggM8hGyDmjtLuQVzpBUBud9A",
    authDomain: "awesomesauceinventorytracker.firebaseapp.com",
    projectId: "awesomesauceinventorytracker",
    storageBucket: "awesomesauceinventorytracker.appspot.com",
    messagingSenderId: "834123546550",
    appId: "1:834123546550:web:4ab0eb1a02c11fdf52cb17",
  };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };