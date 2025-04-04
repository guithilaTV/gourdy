import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWpHETbJap6W5hvkN3VTPfAbUpg-09SJw",
  authDomain: "gourdy-62d42.firebaseapp.com",
  projectId: "gourdy-62d42",
  storageBucket: "gourdy-62d42.appspot.com",
  messagingSenderId: "946833404338",
  appId: "1:946833404338:ios:3766c2265a49ac7594b4ab",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
