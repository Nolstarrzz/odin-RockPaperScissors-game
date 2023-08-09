const choices = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener("click", function() {
    playRound('rock');
});

paperButton.addEventListener("click", function() {
    playRound('paper');
});

scissorsButton.addEventListener("click", function() {
    playRound('scissors');
});

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log("You chose " + playerChoice + " and the computer chose " + computerChoice);

    if (playerChoice === computerChoice) {
        console.log("It was a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerWins++;
        console.log("You've won! Player: " + playerWins + ", Computer: " + computerWins);
    } else {
        computerWins++;
        console.log("You lost. Player: " + playerWins + ", Computer: " + computerWins);
    }

    // Optionally, you can update the game status here if needed
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


