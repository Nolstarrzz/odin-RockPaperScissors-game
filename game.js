let choices = ['rock','paper','scissors']
let computerChoice;
let playerChoice;
let playerWins = 0;
let computerWins = 0;
let gameNumber;

function getComputerChoice()
{
    computerChoice = choices[(Math.floor(Math.random() * choices.length))];
    computerChoice = computerChoice.toLowerCase();
    return computerChoice;
}

function getPlayerSelection()
{
    while (true) {
        playerChoice = prompt(choices).toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
          break;
        } 
        else {
          alert("Invalid choice. Please enter rock, paper, or scissors.");
        }
      }
    return playerChoice;
}

function playRound(playerChoice, computerChoice)
{
    console.log("You Chose " + playerChoice + " and the computer chose " + computerChoice);
    if (playerChoice == 'rock' && computerChoice == 'scissors' || playerChoice == 'paper' && computerChoice == 'rock' || playerChoice == 'scissors' && computerChoice == 'paper')
    {
        playerWins++;
        return"You've Won, you have " + playerWins + " , the computer has " + computerWins;
    }

    else if (playerChoice === computerChoice)
    {
        return"It was a tie, you have " + playerWins + " , the computer has " + computerWins;
    }
    else
    {
        computerWins++;
        return"You lost, you have " + playerWins + " , the computer has " + computerWins;
    }
}

function game()
{
    let counter = 0;
    gameNumber = prompt('How many games do you want to play?');
    let intNumber = parseInt(gameNumber);
    while (true)
    {
        getComputerChoice();
        getPlayerSelection();
        console.log(playRound(playerChoice, computerChoice));
        counter++;
        if (counter == intNumber)
        {
            break;
        }
    }
    if (playerWins > computerWins)
    {
        console.log('You Won!')
    }
    else if (playerWins < computerWins)
    {
        console.log('You Lose!')
    }
    else
    {
        console.log('It was a tie')
    }
}


