import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-hweb7zCfcmYkPD62GEzu1BgObIKnpFA",
    authDomain: "chatapp-db-db7d7.firebaseapp.com",
    projectId: "chatapp-db-db7d7",
    storageBucket: "chatapp-db-db7d7.appspot.com",
    messagingSenderId: "24854705311",
    appId: "1:24854705311:web:27a7cefe4848a5ceea1eaa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  export default db;