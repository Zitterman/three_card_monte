// <!--
// Project Name: Three Card Monte
// Author: Rich Zitterman
// Student @GA in NYC
//  -->

// An array of the card face classes to be randomly placed on each card
var cardArray = ["joker", "queen", "joker"];

// An array of if user win comments to be randomly selected
var winComments = [
  "WOW, I can't believe you found her!",
  "Lucky you!",
  "Nice, drinks are on you today!",
  "Hey, my kids have to eat.",
  "Psychic genius here!",
  "Are you cheating?",
  "You don't have to try so hard.",
  "Show off!",
  "Ok, ok, lets take it easy."
];

// An array of if user loss comments to be randomly selected
var lossComments = [
  "That's a shame.",
  "Oh, so close.",
  "Next time champ!",
  "I feel for you.",
  "That has to be an empty feeling...",
  "Oh...the stench of defeat!",
  "There's always next time.",
  "Does it hurt?",
  "I'm having steak tonight!"
];

// Durstenfeld shuffle algorithm
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
};

// A function for initiating the cardArray shuffle for every game turn
var init = function() {
    shuffled = shuffleArray(cardArray);
    newCard = shuffled[cardArray.length-1];
};

// A function for initiating the winComments shuffle for every game turn
var initWins = function() {
    shuffled = shuffleArray(winComments);
    wins = shuffled[winComments.length-1];
};

// A function for initiating the lossComments shuffle for every game turn
var initLoss = function() {
    shuffled = shuffleArray(lossComments);
    lose = shuffled[lossComments.length-1];
};

// A var to set money to zero for keeping track of the users win/loss total
var money = 0;

// A function to show the faces of the cards just prior to the game beginning for the user
var cardShow = function() {
  $(".one").addClass("joker");
  $(".two").addClass("queen");
  $(".three").addClass("joker");
};

// A function to hide the faces of the cards just prior to the game beginning for the user
var cardHide = function() {
  $(".one").removeClass("joker queen");
  $(".two").removeClass("queen joker");
  $(".three").removeClass("joker queen");
};

// A function to start messaging the user when the page loads
var startGame = function() {
  setTimeout(function() {
    $("#message-display p").text("$20 to Play!");
  }, 2500);
  setTimeout(function() {
    $("#message-display p").text("Are You Feeling lucky?");
  }, 4000);
  setTimeout(function() {
    $("#message-display p").text("Find the Queen to Win!");
    cardShow();
    playHighlight();
  }, 5500);
};

// A function to activate the play button to start their game
var playButton = function() {
  $("#play-button").click(function() {
    $("#message-display p").text("");
    cardHide();
    pickCard();
    initWins();
    initLoss();
  });
};

// A function to initiate the events for whichever card is chosen
var pickCard = function() {
  $(".one").click(function() {
    console.log(newCard);
    $(".one").addClass(newCard);
    if ($(this).hasClass("queen")) {
    $("#message-display p").text(wins);
    money = money + 20;
    $("#money-update p").text("$" + money);
    } else if ($(this).hasClass("joker")) {
    $("#message-display p").text(lose);
    money = money - 20;
    $("#money-update p").text("$" + money);
    }
    setTimeout(function() {
      $("#message-display p").text("Do you want to Play On or Quit?");
    }, 2000);
    setTimeout(function() {
      playonQuit();
    }, 2000);
    gameChoice();
    $(".card").off();
  });
  $(".two").click(function() {
    $(".two").addClass(newCard);
    if ($(this).hasClass("queen")) {
    $("#message-display p").text(wins);
    money = money + 20;
    $("#money-update p").text("$" + money);
    } else if ($(this).hasClass("joker")) {
    $("#message-display p").text(lose);
    money = money - 20;
    $("#money-update p").text("$" + money);
    }
    setTimeout(function() {
      $("#message-display p").text("Do you want to Play On or Quit?");
    }, 2000);
    setTimeout(function() {
      playonQuit();
    }, 2000);
    gameChoice();
    $(".card").off();
  });
  $(".three").click(function() {
    $(".three").addClass(newCard);
    if ($(this).hasClass("queen")) {
    $("#message-display p").text(wins);
    money = money + 20;
    $("#money-update p").text("$" + money);
    } else if ($(this).hasClass("joker")) {
    $("#message-display p").text(lose);
    money = money - 20;
    $("#money-update p").text("$" + money);
    }
    setTimeout(function() {
      $("#message-display p").text("Do you want to Play On or Quit?");
    }, 2000);
    setTimeout(function() {
      playonQuit();
    }, 2000);
    gameChoice();
    $(".card").off();
  });
};

// A function for initiating the user choices after a round of play
var gameChoice = function() {
  $("#playon-button").click(function() {
    reRun();
    $("#playon-button").off();
  });
  $("#quit-button").click(function() {
    if (money < 0) {
    $("#message-display p").text("Thank you for the $" + money * -1 + ", come back anytime!");
  } else if (money > 0) {
    $("#message-display p").text("Somehow you took $" + money + " of my money!");
  } else {
    $("#message-display p").text("Breaking even is boring...play more.");
  }
  resetHighlight();
  $("#quit-button").off();
  });
};

// A function for the user to continue playing after the round is over
var reRun = function() {
    $("#message-display p").text("Find the Queen to Win!");
    playHighlight();
    init();
    cardHide();
    cardShow();
};

// A function that acts like a reset button for the game for the user
var reSet = function() {
  $("#reset-button").click(function() {
    location.reload();
  });
};

// A funtion to highlight the play button at the appropriate times
var playHighlight = function() {
  $("#play-button").css("background-image", "url(images/play_hl.png)");
  setTimeout(function() {
    $("#play-button").css("background-image", "url(images/play.png)");
  }, 2500);
};

// A funtion to highlight the play on and quit buttons at the appropriate times
var playonQuit = function() {
  $("#playon-button").css("background-image", "url(images/play_on_hl.png)");
  $("#quit-button").css("background-image", "url(images/quit_hl.png)");
  setTimeout(function() {
    $("#playon-button").css("background-image", "url(images/play_on.png)");
    $("#quit-button").css("background-image", "url(images/quit.png)");
  }, 2500);
};

// A funtion to highlight the reset button at the appropriate times
var resetHighlight = function() {
  $("#reset-button").css("background-image", "url(images/reset_hl.png)");
};

// To be ready when the page loads
$(document).ready(function() {
  init();
  initWins();
  initLoss();
  startGame();
  playButton();
  reSet();
});
