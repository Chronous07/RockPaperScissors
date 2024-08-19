/* Create a function that will have the computer make a choice between rock, paper, or scissors
Take user input for rock, paper, or scissors (check to see if their input is an expected result or not)
Compare computer choice with user choice to determine a winner
Declare and winner and reset the game
*/


//Use Math.random to get a random number between 1 and 3, use a switch loop to assign each number to a rock/paper/scissor choice.
function getComputerChoice(){
    switch (Math.floor(Math.random()*3)+1){        
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return console.warning("Error, random code selected a number outside of the range of 1-3");
    }
}

//Check the player choice input to determine if its one of the acceptable choices (ignore case)
//Use an if or statement to see if the user input is equal to one of the three acceptable options
//rock, paper, or scissors
function checkPlayerChoice(choice){
    if (choice == `rock` || choice == `paper` || choice == `scissors`) {
        return true;
    }
    return false;
}

//Check whether the player or computer wins
//use a series of loops for each possible situation to determine the winner
function checkWinner(playerSelection, computerSelection) {
    //all tie conditions
    if (playerSelection == computerSelection){
        tieCount++;
        return `so its a tie!`;
    }

    //check for all win conditions
    if (playerSelection == `rock` && computerSelection == `scissors` 
        || (playerSelection == `paper` && computerSelection == `rock`)
        || (playerSelection == `scissors` && computerSelection == `paper`)) {
        playerScore++;
        return `You Win!`;
    }

    //if there is no tie or win condition (from above code), then player loses
    computerScore++;
    return `You Lose :(.`;
}

let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

//loops through the game until player choses to stop playing
while (confirm(`Press OK to play to play Rock, Paper, Scissors?`)){
    let computerChoice = getComputerChoice().toLowerCase();
/*     console.log(computerChoice) */
    let playerChoice = prompt("Select Rock, Paper, or Scissors").toLowerCase();  

    while (!checkPlayerChoice(playerChoice)){
        playerChoice = prompt(`Selection of ${playerChoice} was not valid. Please select Rock, Paper, or Scissors`).toLowerCase();
    }

    alert(`Computer selected ${computerChoice}, ` + checkWinner(playerChoice, computerChoice))
    alert(`Player Wins:${playerScore} Computer Wins:${computerScore} Ties:${tieCount}`)
}
