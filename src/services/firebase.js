import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA6wpZwudJEngyiuY0gEWkCFXnu7NZO-fg",
    authDomain: "mymecadodio.firebaseapp.com",
    databaseURL: "https://mymecadodio.firebaseio.com",
    projectId: "mymecadodio",
    storageBucket: "mymecadodio.appspot.com",
    messagingSenderId: "805507051517",
    appId: "1:805507051517:web:b1ea2d58d2008536547394",
    measurementId: "G-VYV36XN89S"
  };

firebase.initializeApp(firebaseConfig);

export default firebase