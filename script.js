
const rock = "rock";
const paper = "paper";
const scissors = "scissors";




function getComputerChoice(){
    const choices = [rock, paper, scissors];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let playerSelection = prompt("enter your choice of rock, paper or scissors");

function playRound(){
    if ((playerSelection == scissors && getComputerChoice == paper) ||
        (playerSelection == rock && getComputerChoice == scissors) ||
        (playerSelection == paper && getComputerChoice == rock )){
         return ("You WIN");
    } else {
        return  ("You LOST");
    }
    
}
console.log(getComputerChoice());
console.log(playRound());


