/* This is a simple game of rock, paper, scissors against a computer
*/

{ //Global Variables 
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;
}

while (confirm(`Press OK to play to play Rock, Paper, Scissors`)){
    let computerChoice = getComputerChoice().toLowerCase();
    let playerChoice = prompt("Select Rock, Paper, or Scissors").toLowerCase();  

    while (!checkPlayerChoiceIsValid(playerChoice)){
        playerChoice = prompt(`Selection of ${playerChoice} was not valid. Please select Rock, Paper, or Scissors`).toLowerCase();
    }

    alert(`Computer selected ${computerChoice}, ` + checkWinner(playerChoice, computerChoice));
    alert(`Player Wins:${playerScore} Computer Wins:${computerScore} Ties:${tieCount}`);
}

alert(`Thanks for playing!  Final Scores: Player Wins:${playerScore} Computer Wins:${computerScore} Ties:${tieCount}`)

function getComputerChoice(){
    switch (Math.floor(Math.random()*3)+1){        
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return console.error("Math.Random selected a number outside of the range of 1-3");
    }
}

function checkPlayerChoiceIsValid(choice){
    if (choice == `rock` || choice == `paper` || choice == `scissors`) {
        return true;
    }
    return false;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        tieCount++;
        return `so its a tie!`;
    }

    if (playerSelection == `rock` && computerSelection == `scissors` 
        || (playerSelection == `paper` && computerSelection == `rock`)
        || (playerSelection == `scissors` && computerSelection == `paper`)) {
        playerScore++;
        return `You Win!`;
    }

    computerScore++;
    return `You Lose :(.`;
}