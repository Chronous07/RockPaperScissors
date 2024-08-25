/* This is a simple game of rock, paper, scissors against a computer
*/

//Global Variables 
let playerScore = 0;
let computerScore = 0;
let tieCount = 0;
let gameOver = false;
let buttonListener = document.querySelectorAll(`button`);

buttonListener.forEach((button)=>{
    button.addEventListener('click', playerChoice);
});

/* alert(`Thanks for playing!  Final Scores: Player Wins:${playerScore} Computer Wins:${computerScore} Ties:${tieCount}`) */

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

function playerChoice(event){
    executeGame(event.target.id);
}

function executeGame(playerChoice) {
    let computerChoice = getComputerChoice().toLowerCase(); 
    let playerScoreLog = document.getElementById("score_player");
    let computerScoreLog = document.getElementById("score_computer");
    let roundResult = document.getElementById("round_result");

    if (checkWinner(playerChoice, computerChoice) == 0){
        console.log("Tie");
        roundResult.textContent = `Player selected ${playerChoice}, Computer selected ${computerChoice}.  Its a tie`
    } else if (checkWinner(playerChoice, computerChoice) == 1) {
        roundResult.textContent = `Player selected ${playerChoice}, Computer selected ${computerChoice}.  You win the round`
        playerScore++;
    } else if (checkWinner(playerChoice, computerChoice) == 2) {
        roundResult.textContent = `Player selected ${playerChoice}, Computer selected ${computerChoice}.  You lose the round`
        computerScore++;
    }

    if (playerScore == 5){
        alert("You beat the computer in a best of 5. Game is now reset");
        computerScore = 0;
        playerScore = 0;
        roundResult.textContent = ""
    }
    if (computerScore == 5){
        alert("The computer beat you in a best of 5. Game is now reset");
        computerScore = 0;
        playerScore = 0;
        roundResult.textContent = ""
    }


    playerScoreLog.textContent = "Player Score: " + playerScore;
    computerScoreLog.textContent = "Computer Score: " + computerScore;

}

function checkWinner(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection){
        return 0;
    }

    if (playerSelection == `rock` && computerSelection == `scissors` 
        || (playerSelection == `paper` && computerSelection == `rock`)
        || (playerSelection == `scissors` && computerSelection == `paper`)) {
        return 1;
    }

    return 2;
}