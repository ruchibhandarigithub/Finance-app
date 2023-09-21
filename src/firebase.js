// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth';
import { getFirestore,doc,setDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCdYnPatI7r-DbY1IpvVMk1bCpPDx3iPc",
  authDomain: "wealthwave-7c8bd.firebaseapp.com",
  projectId: "wealthwave-7c8bd",
  storageBucket: "wealthwave-7c8bd.appspot.com",
  messagingSenderId: "342761855544",
  appId: "1:342761855544:web:1c84e38be74468607ae4cd",
  measurementId: "G-12BZ4G58YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
 export {db,auth,provider,doc,setDoc};
