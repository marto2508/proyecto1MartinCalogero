
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAbwBUbS62_ggfu1QjL4LDFK4XKC4D7SzU",
  authDomain: "reactvestitecomogerardo.firebaseapp.com",
  projectId: "reactvestitecomogerardo",
  storageBucket: "reactvestitecomogerardo.appspot.com",
  messagingSenderId: "1081584234656",
  appId: "1:1081584234656:web:5e41436c56e3985a5959c5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);