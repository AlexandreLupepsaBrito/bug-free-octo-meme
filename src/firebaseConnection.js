import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0cCKlUTlxhMWLQv1zv2Kv0Af7Cwki35M",
    authDomain: "listadetarefas-90839.firebaseapp.com",
    projectId: "listadetarefas-90839",
    storageBucket: "listadetarefas-90839.appspot.com",
    messagingSenderId: "2395011637",
    appId: "1:2395011637:web:d07f36888c7cf3f8c24f7c"
  };

const firebaseapp =  initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export {db, auth};