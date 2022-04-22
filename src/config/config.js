import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyDuLsDDEw0prdOmQ7JHenqjB1ypXt6GN7I",
    authDomain: "atms-b1db7.firebaseapp.com",
    projectId: "atms-b1db7",
    storageBucket: "atms-b1db7.appspot.com",
    messagingSenderId: "366160455418",
    appId: "1:366160455418:web:8282a9e3a211aa0bbb8b43"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);

export {auth,fs,storage};