"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
const displaySecret = function (secret) {
  document.querySelector(".number").textContent = secret;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Value");
  } else if (guess === secretNumber) {
    displayMessage("correct");
    document.body.style.background = "green";
    displaySecret(secretNumber);

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  } else if (guess !== secretNumber) {
    if (guess > 1) {
      displayMessage(guess > secretNumber ? "too high" : "too low");
      score--;
      displayScore(score);
    } else {
      displayMessage("you lost the game");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("start guessing...");
  displayScore(score);
  displaySecret("?");
  document.body.style.background = "black";
});

console.log(score);
console.log(highScore);
