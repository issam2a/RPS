// const choiceArray = ["rock", "paper", "scissors"];
// let humanScore = 0;
// let computerScore = 0;
// let rounds = 0;
// playGame();

// function getComputerChoice() {
//   return choiceArray[Math.floor(Math.random() * choiceArray.length)];
//   }
// let computer = getComputerChoice();

// function getHumanChoice() {
//   let humanChoice = prompt("Chose your weapon ").toLowerCase();
//   if (!choiceArray.includes(humanChoice)) {
//     alert('that is not a weapon !! Please enter "rock", "paper", or "scissors"');
//     return getHumanChoice();
//   }
//   console.log(humanChoice)
//   return humanChoice;


  
// }
// let human = getHumanChoice();

// function playRound(human, computer) {
//   if (human === computer) {
//     console.log(
//       `that is a tie !! you choose ${human} and computer choose ${computer}`
//     );
//   } else if (
//     (human === "rock" && computer === "scissors") ||
//     (human === "paper" && computer === "rock") ||
//     (human === "scissors" && computer === "paper")
//   ) {
//     console.log(
//       `you win!!  you choose ${human} and computer choose ${computer}`
//     );
//     humanScore++;
//   } else {
//     console.log(
//       `you lose ! computer chose ${computer} and you choose ${human}`
//     );
//     computerScore++;
//   }
// }


// function playGame(){
//     for(let i = 1 ; i<= 5 ; i++){
//         if (humanScore === 3 || computerScore === 3 ){
            
//             break;
//         }
//         else{
//             playRound(getHumanChoice(),getComputerChoice());
//             rounds++;
//             console.log(`round : ${rounds} , computer score :${computerScore} , human score : ${humanScore}`);
    
//         }
//     }
//      getWinner();
// }
// function getWinner(){
//     humanScore > computerScore ? 
//         console.log(`you win !! you score : ${humanScore} , computer score : ${computerScore}`)
//         :
//             console.log(`you lose !! you score : ${humanScore} , computer score : ${computerScore}`);}

        
// Function to generate a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  // Function to determine the winner of a single round
  function getRoundWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return 'tie';
    if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')) {
      return 'player';
    } else {
      return 'computer';
    }
  }
  
  // Function to play the game until one player reaches 5 points
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    while (humanScore < 5 && computerScore < 5) {
      const playerChoice = prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
      const computerChoice = getComputerChoice();
      const roundWinner = getRoundWinner(playerChoice, computerChoice);
  
      if (roundWinner === 'player') {
        humanScore++;
        alert(`You win this round! Your score: ${humanScore}, Computer score: ${computerScore}`);
      } else if (roundWinner === 'computer') {
        computerScore++;
        alert(`You lose this round! Your score: ${humanScore}, Computer score: ${computerScore}`);
      } else {
        alert('It\'s a tie!');
      }
    }
  
    getWinner(humanScore, computerScore);
  }
  
  // Function to determine and display the overall winner
  function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
      console.log(`You win the game! Your score: ${humanScore}, Computer score: ${computerScore}`);
    } else {
      console.log(`You lose the game! Your score: ${humanScore}, Computer score: ${computerScore}`);
    }
  }
  
  playGame();