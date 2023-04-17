
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDmgfF9KQZDIbNot9ojIuBB0fBeAI0ktzo",
  authDomain: "nexusvr-300e8.firebaseapp.com",
  projectId: "nexusvr-300e8",
  storageBucket: "nexusvr-300e8.appspot.com",
  messagingSenderId: "859192987486",
  appId: "1:859192987486:web:f4a81c02cba76f928cc9cf",
  measurementId: "G-NE4BG74EL9"
};


const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export default firestore;