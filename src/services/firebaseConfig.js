import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEDDwaTVfDCmu1_DFIxFbaaZ4Pr33HBTI",
  authDomain: "ifpr-c89b2.firebaseapp.com",
  projectId: "ifpr-c89b2",
  storageBucket: "ifpr-c89b2.appspot.com",
  messagingSenderId: "963393146863",
  appId: "1:963393146863:web:767364efe0316fd6be301a",
  measurementId: "G-HYHQN4CVRJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;