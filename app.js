// <!--
// Project Name: Three Card Monte
// Author: Rich Zitterman
// Student @GA in NYC
//  -->

var cardArray = ["joker", "queen", "joker"];

var winComments = [
  "WOW, I can't believe you found her!",
  "Lucky you!",
  "Nice, drinks are on you today!",
  "Hey, my kids have to eat.",
  "Psychic genius here!",
  "Are you cheating?"
];

var lossComments = [
  "That's a shame.",
  "Oh, so close.",
  "Next time champ!",
  "I feel for you.",
  "That has to be an empty feeling...",
  "Oh...the stench of defeat!"
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

var init = function() {
    shuffled = shuffleArray(cardArray);
    newCard = shuffled[cardArray.length-1];
};

var initWins = function() {
    shuffled = shuffleArray(winComments);
    wins = shuffled[winComments.length-1];
};

var initLoss = function() {
    shuffled = shuffleArray(lossComments);
    lose = shuffled[lossComments.length-1];
};

var money = 0;

var cardShow = function() {
  $(".one").addClass("joker");
  $(".two").addClass("queen");
  $(".three").addClass("joker");
};

var cardHide = function() {
  $(".one").removeClass("joker queen");
  $(".two").removeClass("queen joker");
  $(".three").removeClass("joker queen");
};

var startGame = function() {
  setTimeout(function() {
    $("#message-display p").text("$20 to Play!");
  }, 1500);
  setTimeout(function() {
    $("#message-display p").text("Are You Feeling lucky?");
  }, 3000);
  setTimeout(function() {
    $("#message-display p").text("Find the Queen to Win!");
    cardShow();
  }, 4500);
};

var playButton = function() {
  $("#play-button").click(function() {
    $("#message-display p").text("");
    cardHide();
    pickCard();
    initWins();
    initLoss();
  });
};

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
      $("#message-display p").text("Do you want to Keep Playing or Quit?");
    }, 1500);
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
      $("#message-display p").text("Do you want to Keep Playing or Quit?");
    }, 1500);
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
      $("#message-display p").text("Do you want to Keep Playing or Quit?");
    }, 1500);
    gameChoice();
    $(".card").off();
  });
};

var gameChoice = function() {
  $("#keepgoing-button").click(function() {
    reRun();
    $("#keepgoing-button").off();
  });
  $("#quit-button").click(function() {
    if (money < 0) {
    $("#message-display p").text("Thank you for the $" + money * -1 + ", come back anytime!");
  } else if (money > 0) {
    $("#message-display p").text("Somehow you took $" + money + " of my money!");
  } else {
    $("#message-display p").text("Breaking even is boring...come on, play more.");
  }
    $("#quit-button").off();
  });
};

var reRun = function() {
    $("#message-display p").text("Find the Queen to Win!");
    init();
    cardHide();
    cardShow();
};

var reSet = function() {
  $("#reset-button").click(function() {
    location.reload();
  });
};

$(document).ready(function() {
  init();
  initWins();
  initLoss();
  startGame();
  playButton();
  reSet();
});
