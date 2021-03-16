import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNLC6n1uFWFZsSzpDzwrMxR_g-BKqVKBM",
    authDomain: "instagram-clone-react-9acf8.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-9acf8.firebaseio.com",
    projectId: "instagram-clone-react-9acf8",
    storageBucket: "instagram-clone-react-9acf8.appspot.com",
    messagingSenderId: "565255523853",
    appId: "1:565255523853:web:2dc404e63d32c4f04d8f44",
    measurementId: "G-S5NRTC6QFF"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
    db,
    auth,
    storage
};