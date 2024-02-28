// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD3TtYJW3eNdWNVluYceZlUdeZ5uNyVs9A", 
  authDomain: "tom-cbeb0.firebaseapp.com",
  projectId: "tom-cbeb0",
  storageBucket: "tom-cbeb0.appspot.com",
  messagingSenderId: "758387238914",
  appId: "1:758387238914:web:b292b1930e85aee88f1f1b",
  measurementId: "G-RVZ8ME58GJ"
};
// initialize firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth ,db };
