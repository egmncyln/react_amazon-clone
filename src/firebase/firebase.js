import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBrNLB7QQdphL9oyHtoJCM-DnSLeEJ7c5Q",
    authDomain: "clone-aa089.firebaseapp.com",
    databaseURL: "https://clone-aa089.firebaseio.com",
    projectId: "clone-aa089",
    storageBucket: "clone-aa089.appspot.com",
    messagingSenderId: "824294804722",
    appId: "1:824294804722:web:2ff69c07adbcead8a0146b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };