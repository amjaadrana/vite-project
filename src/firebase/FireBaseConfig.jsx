// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2I5jwDiWr37I84GYlnuHcf6Qdmre9UwQ",
  authDomain: "myfirstweb-89db8.firebaseapp.com",
  projectId: "myfirstweb-89db8",
  storageBucket: "myfirstweb-89db8.appspot.com",
  messagingSenderId: "731985168870",
  appId: "1:731985168870:web:8f9e2c317ffb0eb7552e27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);
const googleProvider = new GoogleAuthProvider(app);
export { fireDB, auth ,storage , googleProvider};
