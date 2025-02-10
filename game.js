function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

function getComputerChoice() {
    choice = getRandomInt(3);

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Select 0 - Rock, 1 - Paper, 2 - Scissors");
    choice = Number(choice)

    if (choice != 0 && choice != 1 && choice != 2) {
        console.log("Please introduce a valid value")
    }

    return choice;

}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) {
        console.log("A tie! No one wins");
    } else if (humanChoice == 0 && computerChoice == 1) {
        console.log("You lose! Paper beats rock");
        computerScore += 1;
    } else if (humanChoice == 1 && computerChoice == 2) {
        console.log("You lose! Scissors beat paper");
        computerScore += 1;
    } else if (humanChoice == 2 && computerChoice == 0) {
        console.log("You lose! Rock beats scissors");
        computerScore += 1;
    } else if (humanChoice == 1 && computerChoice == 0) {
        console.log("You win! Paper beats rock");
        humanScore += 1;
    } else if (humanChoice == 2 && computerChoice == 1) {
        console.log("You win! Scissors beat paper");
        humanScore += 1;
    } else if (humanChoice == 0 && computerChoice == 2) {
        console.log("You win! Rock beats scissors");
        humanScore += 1;   
    }

}

function playGame(){
   
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);

    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (humanScore > computerScore){
        console.log("Human Wins - You are the best");
    } else if (humanScore < computerScore) {
        console.log("Computer Wins - You suck");
    } else {
        console.log("It's a Tie!!")
    }
}

let humanScore = 0;
let computerScore = 0;

playGame()

