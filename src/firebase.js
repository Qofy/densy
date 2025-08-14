// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-J8LAHk3-COlbI36Fxc6h9_vSrLq1D8Y",
  authDomain: "disney-cone.firebaseapp.com",
  projectId: "disney-cone",
  storageBucket: "disney-cone.firebasestorage.app",
  messagingSenderId: "567454527110",
  appId: "1:567454527110:web:4b730a615695fea4e1eb07",
  measurementId: "G-XY3E358QHK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(firebaseApp);
// console.log(`db: ${db}`)
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;

//
