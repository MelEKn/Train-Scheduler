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

    //local "temporary" object of train data
    var newTrain = {
        name: trainName,
        dest: dest,
        first: firstTrainTime,
        freq: freq
    };

    //upload train data to database
    database.ref().push(newTrain);

    console.log("newTrain.name is " + newTrain.name);

});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    //Store everything from the childSnapshot into a variable
    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().dest;
    var firstTrain = childSnapshot.val().first;
    var trainFreq = childSnapshot.val().freq;

    // Create the new row
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDest),
        $("<td>").text(trainFreq)
    );

    var nextTrain = moment(firstTrain, "HH:mm");
    var now = moment().format("HH:mm");
    console.log("now is " + now);
    //   var difference = now.diff(firstTrain, "minutes");
    //   console.log("now.diff(firstTrain) is " + difference);
    console.log("firstTrain is " + firstTrain);

    console.log("nextTrain.diff(moment(), 'minutes') is " + nextTrain.diff(moment(), "minutes"));
    console.log("moment().diff(nextTrain, 'minutes'); is " + moment().diff(nextTrain, "minutes"));

    console.log("to: " + moment().to(nextTrain));
    //  console.log(nextTrain.toNow());

    //   if(),

    while(nextTrain.diff(moment(),"minutes") < 0){
        nextTrain.add(trainFreq, "minutes");
        console.log("nextTrain is " + nextTrain.format("HH:mm"));
    }

    var minAway = nextTrain.diff(moment(), "minutes");
    //moment().diff(nextTrain, "minutes");

    console.log("minAway is " + minAway);

    
    newRow.append(
        $("<td>").text(nextTrain.format("HH:mm")),
        $("<td>").text(minAway)
    );



    // Append the new row to the table
    $("#train-table > tbody").append(newRow);
});


