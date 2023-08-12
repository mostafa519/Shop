import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBfsByssgok-3mJPyjh6v-GaDkCNRVOqow",
  authDomain: "clothes-shop-c92c1.firebaseapp.com",
  projectId: "clothes-shop-c92c1",
  storageBucket: "clothes-shop-c92c1.appspot.com",
  messagingSenderId: "33911277777",
  appId: "1:33911277777:web:961c76e5b35a35fec79df0",
  measurementId: "G-JC4VESZW1N"
};
 
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export {db ,analytics,firebaseConfig}

export const auth = getAuth(app);