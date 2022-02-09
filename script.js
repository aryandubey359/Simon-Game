var greenAudio = new Audio("./sounds/green.mp3");
var blueAudio = new Audio("./sounds/blue.mp3");
var redAudio = new Audio("./sounds/red.mp3");
var yellowAudio = new Audio("./sounds/yellow.mp3");
var gameOver = new Audio("./sounds/wrong.mp3");

var userClickedPattern = [];

var checked = 0; //0 if wrong answer and 1 if right answer.

var level = 0;

var userChosenColour;

var buttonsClicked = 0;

var gamePattern = [];
var randomNumber;
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;

function nextSequence() {
  $("#level-title").text("Level " + (level + 1));
  randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  if (randomChosenColour === "red") {
    $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    redAudio.play();
  } else if (randomChosenColour === "blue") {
    $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    blueAudio.play();
  } else if (randomChosenColour === "green") {
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    greenAudio.play();
  } else if (randomChosenColour === "yellow") {
    $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    yellowAudio.play();
  }
  level++;
}

$(".btn").click(function (event) {
  userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  if (event.target.id === "red") {
    $("#red").addClass("pressed");
    setTimeout(function () {
      $("#red").removeClass("pressed");
    }, 150);
    redAudio.play();
    buttonsClicked++;
  } else if (event.target.id === "blue") {
    $("#blue").addClass("pressed");
    setTimeout(function () {
      $("#blue").removeClass("pressed");
    }, 150);
    blueAudio.play();
    buttonsClicked++;
  } else if (event.target.id === "green") {
    $("#green").addClass("pressed");
    setTimeout(function () {
      $("#green").removeClass("pressed");
    }, 150);
    greenAudio.play();
    buttonsClicked++;
  } else if (event.target.id === "yellow") {
    $("#yellow").addClass("pressed");
    setTimeout(function () {
      $("#yellow").removeClass("pressed");
    }, 150);
    yellowAudio.play();
    buttonsClicked++;
  }
  if (buttonsClicked === level) {
    checkAnswer();
  }
});

function checkAnswer() {
  for (var j = 0; j <= buttonsClicked; j++) {
    if (userClickedPattern[j] == gamePattern[j]) {
      checked = 1;
    } else if (userClickedPattern[j] != gamePattern[j]) {
      $("#level-title").text("Game Over! Press any key to restart the game.");
      gameOver.play();
      level = 0;
      checked = 0;
      buttonsClicked = 0;
      userClickedPattern = [];
      gamePattern = [];
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      break;
    }
  }
  if (checked == 1) {
    buttonsClicked = 0;
    userClickedPattern = [];
    nextSequence();
  }
}

$(document).keypress(function () {
  nextSequence();
});
