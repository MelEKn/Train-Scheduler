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

// Button for adding Trains
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();
    var trainName = $("#train-name-input").val().trim();
    var dest = $("#dest-input").val().trim();
    var firstTrainTime = moment($("#first-time-input").val().trim(), "HH:mm").format("HH:mm");
    var freq = $("#freq-input").val().trim();

    console.log("trainName is " + trainName);
    console.log("dest is " + dest);
    console.log("firstTrainTime is " + firstTrainTime);
    console.log("freq is " + freq);
});