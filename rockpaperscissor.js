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
function checkPlayerChoice(){

}

let computerChoice = getComputerChoice().toLowerCase();
let playerChoice = prompt("Select Rock, Paper, or Scissors").toLowerCase();