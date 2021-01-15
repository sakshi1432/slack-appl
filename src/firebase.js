import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfC1sZXYB3EQN21nPDGz_wNj9HxswCRhM",
  authDomain: "slack-327c2.firebaseapp.com",
  projectId: "slack-327c2",
  storageBucket: "slack-327c2.appspot.com",
  messagingSenderId: "413018027379",
  appId: "1:413018027379:web:4125fffa2f14cfa0fd4106",
  measurementId: "G-JW0X039TSY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

// import { auth , provider} from ''
// import database from './firebase'
