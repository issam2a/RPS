const choiceArray = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let rounds = 0;
playGame();

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

function playRound(human, computer) {
  if (human === computer) {
    console.log(
      `that is a tai !! you choose ${human} and computer choose ${computer}`
    );
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    console.log(
      `you win!!  you choose ${human} and computer choose ${computer}`
    );
    humanScore++;
  } else {
    console.log(
      `you lose ! computer chose ${computer} and you choose ${human}`
    );
    computerScore++;
  }
}


function playGame(){
    for(let i = 1 ; i< 5 ; i++){
        if (humanScore < 3 || computerScore < 3 ){
        playRound(getHumanChoice(),getComputerChoice());
        rounds++;
        console.log(`round : ${rounds} , computer score :${computerScore} , human score : ${humanScore}`);
        }
        else{
            return
        }
    }
    getWinner();
}
function getWinner(){
    humanScore > computerScore ? 
        console.log(`you win !! you score : ${humanScore} , computer score : ${computerScore}`)
        :
            console.log(`you lose !! you score : ${humanScore} , computer score : ${computerScore}`);}

        
