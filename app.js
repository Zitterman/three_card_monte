// <!--
// Project Name: Three Card Monte
// Author: Rich Zitterman
// Student @GA in NYC
//  -->

var cardArray = ["joker", "queen", "joker"];

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

var money = 0;

var cardShow = function() {
  $(".one").addClass("joker");
  $(".two").addClass("queen");
  $(".three").addClass("joker");
};

var cardHide = function() {
  $(".one").removeClass("joker");
  $(".two").removeClass("queen");
  $(".three").removeClass("joker");
};

var startGame = function() {
  setTimeout(function() {
    $("#message-display p").text("20 Dollars to Play!");
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
  });
};

var pickCard = function() {
  $(".one").click(function() {
    $(".one").addClass(shuffleArray(cardArray[0]));
    if ($(this).hasClass("queen")) {
    $("#message-display p").text("WOW, I can't believe you found her!");
    money = money + 20;
    $("#money-update p").text("$" + money);
    } else if ($(this).hasClass("joker")) {
    $("#message-display p").text("That's a shame.");
    money = money - 20;
    $("#money-update p").text("$" + money);
    }
    setTimeout(function() {
      $("#message-display p").text("Do you want to Keep Going or Quit?");
    }, 1500);
    gameChoice();
    $(".card").off();
  });
  $(".two").click(function() {
    $(".two").addClass(shuffleArray(cardArray[1]));
    if ($(this).hasClass("queen")) {
    $("#message-display p").text("WOW, I can't believe you found her!");
    money = money + 20;
    $("#money-update p").text("$" + money);
    } else if ($(this).hasClass("joker")) {
    $("#message-display p").text("That's a shame.");
    money = money - 20;
    $("#money-update p").text("$" + money);
    }
    setTimeout(function() {
      $("#message-display p").text("Do you want to Keep Going or Quit?");
    }, 1500);
    gameChoice();
    $(".card").off();
  });
  $(".three").click(function() {
    $(".three").addClass(shuffleArray(cardArray[2]));
    if ($(this).hasClass("queen")) {
    $("#message-display p").text("WOW, I can't believe you found her!");
    money = money + 20;
    $("#money-update p").text("$" + money);
    } else if ($(this).hasClass("joker")) {
    $("#message-display p").text("That's a shame.");
    money = money - 20;
    $("#money-update p").text("$" + money);
    }
    setTimeout(function() {
      $("#message-display p").text("Do you want to Keep Going or Quit?");
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
    $("#message-display p").text("Go on Take your Money and Run");
    $("#quit-button").off();
  });
};

var reRun = function() {
    $("#message-display p").text("Find the Queen to Win!");
    cardShow();
};

$(document).ready(function() {
  startGame();
  playButton();
});
