// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("button").click(function() {
    var userinput = $("input").val();
    $("#userChoice").text(userinput);

    var randomthing = Math.random();

    var computerinput = $("#computerChoice").val();

    if (randomthing < 0.33) {
        $("#computerChoice").text("rock");
    } else if ((randomthing > 0.33) && (randomthing < 0.67)) {
        $("#computerChoice").text("paper");
    } else {
        $("#computerChoice").text("scissors");
    }

    if ((userinput === "rock") && (randomthing < 0.33)) {
        $("#result").text("It's a tie!");

    } else if ((userinput === "rock") && (randomthing < 0.67) && (randomthing > 0.33))
        $("#result").text("You lose!");

    if ((userinput === "rock") && (randomthing > 0.67))
        $("#result").text("You win!");
        
});



