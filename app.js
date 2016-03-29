// <!--
// Project Name: Three Card Monte
// Author: Rich Zitterman
// Student @GA in NYC
//  -->

console.log('EY');

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

var cardArray = ["joker", "queen", "joker", "joker"];
var randomCard = cardArray[Math.floor(Math.random() * cardArray.length)];

var choiceOutcome = function() {
  if (randomCard === cardArray[1]) {
     $("#message-display p").text("WOW, I can't believe you found her!");
     updateMoney();
   } else if (randomCard !== cardArray[1]) {
     $("#message-display p").text("That's a shame.");
     updateMoney();
   }
};

var updateMoney = function() {
  var money = 0;
  var moneyHolder = $("#money-update p");
  var total = moneyHolder.text("$" + money);
  if (randomCard === cardArray[1]) {
    money = money + 20;
    return total;
  } else if (randomCard !== cardArray[1]) {
    money = money - 20;
    return total;
  }
};

var pickCard = function() {
  $(".one").click(function() {
    $(".one").addClass(randomCard);
    choiceOutcome();
  });
  $(".two").click(function() {
    $(".two").addClass(randomCard);
    choiceOutcome();
  });
  $(".three").click(function() {
    $(".three").addClass(randomCard);
    choiceOutcome();
  });
};

$(document).ready(function() {
  startGame();
  playButton();
});
