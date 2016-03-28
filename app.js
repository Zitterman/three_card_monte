// <!--
// Project Name: Three Card Monte
// Author: Rich Zitterman
// Student @GA in NYC
//  -->

var startGame = function() {
  setTimeout(function() {
    $("#message-display p").text("20 Dollars to Play!");
  }, 1500);
  setTimeout(function() {
    $("#message-display p").text("Are You Feeling lucky?");
  }, 3000);
  setTimeout(function() {
    $("#message-display p").text("Lets Go!");
  }, 4500);
};

var playButton = function() {
  $("#play-button").click(function() {
    $("#message-display p").text("Find the Queen to Win.");
  });
};

var cardClick = function() {
  $(".one").on("click", function() {
    $(".one").toggleClass("joker-one");
  });
  $(".two").on("click", function() {
    $(".two").toggleClass("queen");
  });
  $(".three").on("click", function() {
    $(".three").toggleClass("joker-two");
  });
};



var quitButton = function() {
  $("#quit-button").click(function() {
    location.reload();
  });
};



// Set a timer for the game to begin when the screen loads

// Set the play button to work and start the game

// Prompt the user for whats going to happen...show the cards

// Shuffle the cards

// Prompt the player again and shuffle the cards again

// Prompt user to make a choice

// Set up listeners for the cards for when the player chooses

// Set up if/else for the choices

// If the player chooses the queen
  // Lucky pick, you win 20 dollars.  Do you want to cash out while you are ahead or press your luck?
  // Depending on choice cash out and quit or restart game with updated totals

// If the player chooses the joker
  // You lost, want to try to win your money back or quit now?
  // Player can quit or try again... restarting game with updated totals.

// When quits prompt you won/lost x dollars.


//        Defining
// **************************
//         Using

// When the document is ready
$(document).ready(function() {
  startGame();
  playButton();
  cardClick();
  quitButton();
});
