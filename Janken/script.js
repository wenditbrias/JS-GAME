const user = document.getElementById("user");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const choiceBtn = document.querySelectorAll(".choice-btn button");

let userChoice;
let computerChoice;
let resultEnd;

choiceBtn.forEach((item) =>
  item.addEventListener("click", function () {
    userChoice = this.innerHTML;
    user.innerHTML = userChoice;
    generateComputer();
    getResult();
  })
);

function generateComputer() {
  const random = Math.floor(Math.random() * choiceBtn.length) + 1;
  switch (random) {
    case 1:
      computerChoice = "Papper";
      break;

    case 2:
      computerChoice = "Rock";
      break;

    case 3:
      computerChoice = "Scissors";
      break;
  }

  computer.innerHTML = computerChoice;
}

function getResult() {
  if (userChoice === computerChoice) {
    resultEnd = "You lose";
  }
  if (userChoice === "Papper" && computerChoice === "Scissors") {
    resultEnd = "You lose";
  }
  if (userChoice === "Papper" && computerChoice === "Rock") {
    resultEnd = "You win";
  }
  if (userChoice === "Papper" && computerChoice === "Papper") {
    resultEnd = "Draw!";
  }
  if (userChoice === "Scissors" && computerChoice === "Scissors") {
    resultEnd = "Draw!";
  }
  if (userChoice === "Scissors" && computerChoice === "Rock") {
    resultEnd = "You Lose";
  }
  if (userChoice === "Scissors" && computerChoice === "Papper") {
    resultEnd = "You win!";
  }
  if (userChoice === "Rock" && computerChoice === "Scissors") {
    resultEnd = "You win!";
  }
  if (userChoice === "Rock" && computerChoice === "Rock") {
    resultEnd = "Draw";
  }
  if (userChoice === "Rock" && computerChoice === "Papper") {
    resultEnd = "You Lose";
  }

  result.innerHTML = resultEnd;
}
