// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyATzu3bAWggxGZtskV8LbfzLDWApNpU6oc",
    authDomain: "fir-realtime-database-2e7f3.firebaseapp.com",
    databaseURL: "https://fir-realtime-database-2e7f3.firebaseio.com",
    projectId: "fir-realtime-database-2e7f3",
    storageBucket: "fir-realtime-database-2e7f3.appspot.com",
    messagingSenderId: "553880383044",
    appId: "1:553880383044:web:0f5bd02e32d13c38c7d611"
  };

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);