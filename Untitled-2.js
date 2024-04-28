function getComputerChoice(){
    const choiceArray =['rock', 'paper','scissors'];
    let randomChoice = Math.floor(Math.random() * choiceArray.length);
    let computerChoice = choiceArray[randomChoice];
    return computerChoice;
}
getComputerChoice();
