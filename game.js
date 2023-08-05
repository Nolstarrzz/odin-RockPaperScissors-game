let choices = ['rock','paper','scissors']
let computerChoice;
let playerChoice;
let playerWins;
let computerWins;


function getComputerChoice()
{
    computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    computerChoice = computerChoice.toLowerCase();
    return computerChoice;
}

function getPlayerSelection()
{
    console.log(choices + '. Here are the choices, type your choice now');
    while (true) {
        playerChoice = prompt(choices).toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
          break; // Exit the loop if a valid choice is entered
        } else {
          alert("Invalid choice. Please enter rock, paper, or scissors.");
        }
      }
}

function playGame(playerChoice , computerChoice)
{
    if (playerChoice == 'rock' && computerChoice == 'scissors' || playerChoice == 'paper' && computerChoice == 'rock' || playerChoice == 'scissors' && computerChoice == 'paper')
    {
        playerWins++;
        return"You've Won, you have " + playerWins + " , the computer has " + computerWins;
    }

    else if (playerChoice === computerChoice)
    {
        return"It was a tie, you have " + playerWins + " , the computer has " + computerWins;
    }
}
