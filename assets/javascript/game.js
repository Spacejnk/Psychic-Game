
// set wins and losses to 0
var wins = 0;
var losses = 0;
// decrement number of guest left
var guessesLeft = 8;
// var for compChoice math random function
var compChoice;
// create empty array for user guess
var userGuesses = [];
// target each id in span tag
var winId = document.getElementById("win");
var lossesId = document.getElementById("lose");
var guessesLeftId = document.getElementById("guessesLeft");
var guessesId = document.getElementById("guesses");
var userGuessesId = document.getElementById("guesses");
// create an array for math.Random comparison with user keyboard event
var letters = [
 "a",
 "b",
 "c",
 "d",
 "e",
 "f",
 "g",
 "h",
 "i",
 "j",
 "k",
 "l",
 "m",
 "n",
 "o",
 "p",
 "q",
 "r",
 "s",
 "t",
 "u",
 "v",
 "w",
 "x",
 "y",
 "z"
];
// function to randomize letters
function compChoiceLetter() {
 return letters[Math.floor(Math.random() * letters.length)];
}
// assign the math.Rand function to compChoice
compChoice = compChoiceLetter();
console.log(compChoice);
document.onkeyup = function(event) {
 guessesLeft--;
 guessesLeftId.textContent = guessesLeft;
 userGuesses += event.key + ", ";
 userGuessesId.textContent = userGuesses;
 // if event.key match win++
 if (event.key === compChoice) {
  wins++;
  winId.textContent = wins;
  compChoiceLetter();
    alert("match");
  guessesLeft = 8;
  guessesLeftId.textContent = guessesLeft;
  return;
 }

 if (guessesLeft === 0) {
   console.log(guessesLeft);
  guessesLeftId.textContent = 0;
  losses++;
  lossesId.textContent = losses;
  compChoiceLetter();
  // alert("You lose");
  userGuesses = "";
  userGuessesId.textContent = "";
  guessesLeft = 9;
  guessesLeftId.textContent = guessesLeft;
  return;
 }

};
