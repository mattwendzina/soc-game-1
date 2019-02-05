/* ---------------------------------
        My Version- Simple 
--------------------------------- */

// function playGame(computer, player) {
//         // debugger;
//     if ( computer === 'rock' ) {
//         if (player === 'scissors') {
//             console.log('Computer wins')
//         } else if (player === 'paper') {
//             console.log('Player wins')
//         } else {
//             console.log('The game is a draw')
//         }
//     } else if (computer === 'scissors') {
//         if (player === 'rock') {
//             console.log('Player wins')
//         } else if (player === 'paper') {
//             console.log('Computer wins')
//         } else {
//             console.log('The game is a draw')
//         }
//     } else if (computer === 'paper') {
//         if (player === 'rock') {
//             console.log('Computer wins')
//         } else if (player === 'scissors') {
//             console.log('Player wins')
//         } else {
//             console.log('The game is a draw')
//         }
//     }
// }

/* ----------------------------------------
            My Version - More advanced
----------------------------------------- */

var choices = ["rock", "paper", "scissors"];
var randomValue = Math.random() * choices.length;
var initValue = Math.floor(randomValue);
var computer = choices[initValue];

var text = document.querySelector("#textInput").value;

var playerScore = 0;
var computerScore = 0;

var playerArray = [];
var computerArray = [];

function randomGenerator() {
  choices = ["rock", "paper", "scissors"];
  randomValue = Math.random() * choices.length;
  initValue = Math.floor(randomValue);
  computer = choices[initValue];

  return computer;
}

function buttonClicked() {
  var textValue = document.querySelector("#textInput");
  var player = textValue.value.toLowerCase();
  randomGenerator();
  playGame(player);
  document.getElementById("result").innerHTML =
    "Player was " +
    player +
    "<br>" +
    " Computer was " +
    computer +
    "<br>" +
    "Result: " +
    result;
  document.getElementById("tally").innerHTML = textValue.value =
    "Player Score is: " +
    playerScore +
    "<br>" +
    "Computer Score is: " +
    computerScore;
  document.getElementById("textInput").value = "";
}

function playGame(player) {
  if (computer === player) {
    result = "It's a draw!";
  } else if (computer === "rock" && player === "scissors") {
    result = "Computer wins!";
    computerScore++;
  } else if (computer === "rock" && player === "paper") {
    result = "Player wins!";
    playerScore++;
  } else if (computer === "scissors" && player === "paper") {
    result = "Computer wins!";
    computerScore++;
  } else if (computer === "scissors" && player === "rock") {
    result = "Player wins!";
    playerScore++;
  } else if (computer === "paper" && player === "rock") {
    result = "Computer wins!";
    computerScore++;
  } else if (computer === "paper" && player === "scissors") {
    result = "Player wins!";
    playerScore++;
  } else {
    result = "Not a valid entry";
  }
  return player;
}

// function scoreKeeper() {
//   playerScore = 0;
//   computerScore = 0;
//   if (result === "Player wins!") {
//     return playerScore++;
//   } else if (result === "Computer wins!") {
//     return computerScore++;
//   } else {
//     return;
//   }
// }

/* --------------------------------
        School of Code version 
---------------------------------- */

// const title = "Give me a move - choose from rock, paper, or scissors";

// player = prompt(title);
// computer = "rock";

// console.log(`The computer move was ${computer}`);

// console.warn("invalid text");

// function playGameTwo() {
//   if (computer === player) {
//     alert("It's a draw!");
//   } else if (computer === "rock" && player === "scissors") {
//     alert("Computer wins!");
//   } else if (computer === "rock" && player === "paper") {
//     alert("Player wins!");
//   } else if (computer === "scissors" && player === "paper") {
//     alert("Computer wins!");
//   } else if (computer === "scissors" && player === "rock") {
//     alert("Player wins!");
//   } else if (computer === "paper" && player === "rock") {
//     alert("Computer wins!");
//   } else if (computer === "paper" && player === "scissors") {
//     alert("Player wins!");
//   } else {
//     alert("Not a valid entry");
//   }
// }

// var i = 0;
// while (i < 5) {
//   playGameTwo();
//   player = prompt(title);
//   i++;
// }

// function whileLoop() {
//   var i = 0;
//   while (i < 10) {
//     debugger;
//     console.log(i);
//     i = i + 1;
//   }
// }

// function forLoop() {
//   debugger;
//   var array = ["matt", "bukola", "wasim"];
//   for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
