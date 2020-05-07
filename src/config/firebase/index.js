import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD0Y70uCKbG7yy5vLTu-3aAhoH5o-y5KgQ",
    authDomain: "reactjs-simple-notes.firebaseapp.com",
    databaseURL: "https://reactjs-simple-notes.firebaseio.com",
    projectId: "reactjs-simple-notes",
    storageBucket: "reactjs-simple-notes.appspot.com",
    messagingSenderId: "32529683314",
    appId: "1:32529683314:web:5d42a7ef50f8726c2343eb",
    measurementId: "G-K0RG8HGX9Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;