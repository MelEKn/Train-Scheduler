// Initialize Firebase

var firebaseConfig = {
    apiKey: "AIzaSyAt2mX8JUADJLJNqwiY6x3HdLxsL692A3A",
    authDomain: "mel-s-app.firebaseapp.com",
    databaseURL: "https://mel-s-app.firebaseio.com",
    projectId: "mel-s-app",
    storageBucket: "mel-s-app.appspot.com",
    messagingSenderId: "167127100574",
    appId: "1:167127100574:web:942b9574771087f1ea1f8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  // Assign the reference to the database to a variable named 'database'
  
  var database = firebase.database();