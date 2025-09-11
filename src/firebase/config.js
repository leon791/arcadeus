import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8btt-jKfkbf2_SspNZgz2mY9Fy6Jf-lo",
  authDomain: "arcadeus-5641b.firebaseapp.com",
  projectId: "arcadeus-5641b",
  storageBucket: "arcadeus-5641b.firebasestorage.app",
  messagingSenderId: "183306943540",
  appId: "1:183306943540:web:4aa12a58a2c514dedede61",
  measurementId: "G-8TM5ZNBJ38"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;