// <!--
// Project Name: Three Card Monte
// Author: Rich Zitterman
// Student @GA in NYC
//  -->

var cardClick = function() {
  $(".one").click(function() {
    $(".one").hide();
    $(".joker-one").show();
  });
  $(".two").click(function() {
    $(".two").hide();
    $(".queen").show();
  });
  $(".three").click(function() {
    $(".three").hide();
    $(".joker-two").show();
  });
};

var playButton = function() {
  $("#play-button").click(function() {
    console.log("play button is ready");
    $("#message-display p").text("Lets Go!");
  });
};

var quitButton = function() {
  $("#quit-button").click(function() {
    location.reload();
  });
};

var startGame = function() {
  setTimeout(function() {
    $("#message-display p").text("20 dollars to play");
  }, 2500);
};

var secondMessage = function() {
  setTimeout(function() {
    $("#message-display p").text("Feeling lucky");
  }, 2500);
  thirdMessage();
};

var thirdMessage = function() {
  setTimeout(function() {
    $("#message-display p").text("Lets Play!");
  }, 2500);
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
  cardClick();
  playButton();
  quitButton();
});
