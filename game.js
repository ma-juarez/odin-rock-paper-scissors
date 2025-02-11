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
        result.textContent = "It's a tie!";
        result.style.cssText = "font-size: 35px; font-weight: bold; color: black;"
    } else if (humanChoice == 0 && computerChoice == 1) {
        result.textContent = "You lose! Paper beats rock";
        result.style.cssText = "font-size: 35px; font-weight: bold; color: red;"
        computerScore += 1;
        compScore.textContent = `Computer Score: ${computerScore}`
    } else if (humanChoice == 1 && computerChoice == 2) {
        result.textContent = "You lose! Scissor beats paper";
        result.style.cssText = "font-size: 35px; font-weight: bold; color: red;"
        computerScore += 1;
        compScore.textContent = `Computer Score: ${computerScore}`
    } else if (humanChoice == 2 && computerChoice == 0) {
        result.textContent = "You lose! Rock beats scissor";
        result.style.cssText = "font-size: 35px; font-weight: bold; color: red;"
        computerScore += 1;
        compScore.textContent = `Computer Score: ${computerScore}`
    } else if (humanChoice == 1 && computerChoice == 0) {
        result.textContent = "You win! Paper beats rock";
        result.style.cssText = "font-size: 35px; font-weight: bold; color: green;"
        humanScore += 1;
        humScore.textContent = `Computer Score: ${humanScore}`
    } else if (humanChoice == 2 && computerChoice == 1) {
        result.textContent = "You win! Scissor beats paper";
        result.style.cssText = "font-size: 35px; font-weight: bold; color: green;"
        humanScore += 1;
        humScore.textContent = `Computer Score: ${humanScore}`
    } else if (humanChoice == 0 && computerChoice == 2) {
        result.textContent = "You win! Rock beats scissor";
        result.style.cssText = "font-size: 35px; font-weight: bold; color: green;"
        humanScore += 1;
        humScore.textContent = `Computer Score: ${humanScore}`   
    }

}


let humanScore = 0;
let computerScore = 0;

// DOM Elements Query
const result = document.querySelector(".result")
const compScore = document.querySelector(".computer")
const humScore = document.querySelector(".human")

// Event listing for button click
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (button.className == "rock") {
        playRound(0, getComputerChoice())
    } else if (button.className == "paper") {
        playRound(1, getComputerChoice())
    } else if (button.className == "scissor") {
        playRound(2, getComputerChoice())
    }
  });
});

