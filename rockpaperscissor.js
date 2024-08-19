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
            return "Error";
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
        return `Computer also selected ${computerSelection}, so its a tie!`;
    }

    //all win conditions
    if (playerSelection == `rock` && computerSelection == `scissors`) {
        playerScore++;
        return `Computer selected ${computerSelection}, You Win!`;
    }
    if (playerSelection == `paper` && computerSelection == `rock`) {
        playerScore++;
        return `Computer selected ${computerSelection}, You Win!`;
    }
    if (playerSelection == `scissors` && computerSelection == `paper`) {
        playerScore++;
        return `Computer selected ${computerSelection}, You Win!`;
    }

    //if there is no tie or win condition (from above code), then player loses
    computerScore++;
    return `Computer selected ${computerSelection}, You Lose :(.`;
}

let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

//loops through the game until player choses to stop playing
while (confirm(`Press OK to play to play Rock, Paper, Scissors?`)){

    //set the font to all lower case so that different versions of capital letters wont impact the game results
    let computerChoice = getComputerChoice().toLowerCase();
    console.log(computerChoice)
    let playerChoice = prompt("Select Rock, Paper, or Scissors").toLowerCase();  


    //Check if the player choice is acceptable or not, and if not then ask them to make the choice again
    //Loop through this until the player makes an acceptable choice.  Once that is done, proceed to check who wins
    while (!checkPlayerChoice(playerChoice)){
        playerChoice = prompt(`Selection of ${playerChoice} was not valid. Please select Rock, Paper, or Scissors`).toLowerCase();
    }

    alert((checkWinner(playerChoice, computerChoice)))
    alert(`Player Wins:${playerScore} Computer Wins:${computerScore} Ties:${tieCount}`)
}
