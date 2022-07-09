import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBy0MMrinMvbJVMzUQbOeufeoV2HXHzRBQ",
    authDomain: "library-a439d.firebaseapp.com",
    projectId: "library-a439d",
    storageBucket: "library-a439d.appspot.com",
    messagingSenderId: "503914390572",
    appId: "1:503914390572:web:812ad880f89d3c75879d89" 
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
