const choiceArray = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * choiceArray.length);
  let computerChoice = choiceArray[randomChoice];
  return computerChoice;
}
let computer = getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt("Chose your weapon ");
  humanChoice = humanChoice.toLowerCase();
  if (!choiceArray.includes(humanChoice)) {
    alert("that is not a weapon !!");
    return getHumanChoice();
  }
  return humanChoice;
}
let human = getHumanChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(
      `that is a tai !! you choose ${humanChoice} and computer choose ${computerChoice}`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(
      `you win!!  you choose ${humanChoice} and computer choose ${computerChoice}`
    );
  } else {
    console.log(
      `you lose ! computer chose ${computerChoice} and you choose ${humanChoice}`
    );
  }
}
playRound(human, computer);
