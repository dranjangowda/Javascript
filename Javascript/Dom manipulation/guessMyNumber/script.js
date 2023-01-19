const generateRandomNumber = () => Math.trunc(Math.random() * 20 + 1);
const num = generateRandomNumber();
const mainContainer = document.querySelector(".mainContainer");
const scoreParagraph = document.getElementById("score");
const win = document.createElement("div");
win.setAttribute("id", "win");
let allTheScores = [];
let highScore = 0;
console.log(num);
let score = 100;

const checkNumber = function () {
  const enteredNumber = Number(document.getElementById("enteredNumber").value);
  if (enteredNumber === num) {
    win.innerText = "correct Number";
    document.body.appendChild(win);
    allTheScores.push(score);
  } else if (num < enteredNumber) {
    win.innerText = "Lower";
    document.body.appendChild(win);
    score -= 10;
  } else if (num > enteredNumber) {
    win.innerText = "higher";
    document.body.appendChild(win);
    score -= 10;
  }
  scoreParagraph.innerText = score;
};

const clearInput = function () {
  const input = document.getElementById("enteredNumber");
  input.innerHTML = null;
};

// start
// end

// state
const initialState = {
  actualNumber: generateRandomNumber(),
  currentPossibleScore: 100,
  enteredNumber: null,
};
const scores = [];

const loadScoresFromStorage = () => {
  // load from local storage
};

const resetInitialState = () => {
  initialState.actualNumber = generateRandomNumber();
  initialState.currentPossibleScore = 100;
  initialState.enteredNumber = null;
};

const handleInputChange = (e) => {
  // TODO: validate e.target.value - min, max, invalid input
  initialState.enteredNumber = parseInt(e.target.value);
  // set inide element
};
const checkAnsmer = () => {};

const getGameResult = (num) => {
  if (num == initialState.actualNumber) return "correct";
  //
  //
};

const ResultSentecnce = {
  correct: "You are correct",
  higher: "The number entered is higher",
};

const showResult = (gameValue) => {
  document.getElementById().innerText = ResultSentecnce[gameValue];
};
