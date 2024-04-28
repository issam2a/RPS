const choiceArray =['rock','paper','scissors'];
function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * choiceArray.length);
    let computerChoice = choiceArray[randomChoice];
    return computerChoice;
}
getComputerChoice();


function getHumanChoice(){
    let humanChoice = prompt('Chose your weapon ');
    humanChoice = humanChoice.toLowerCase();
    if(!choiceArray.includes(humanChoice)){
        alert ('that is not a weapon !!')
        return getHumanChoice();
    }
    return humanChoice;

}
getHumanChoice();


