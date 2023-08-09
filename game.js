const choices = ['rock', 'paper', 'scissors'];
let playerWins = 0;
let computerWins = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const winsText = document.querySelector('#wins')
const choiceText = document.querySelector('#choiceText')
const resetButton = document.querySelector('#resetButton')

rockButton.addEventListener("click", function() {
    playRound('rock');
});

paperButton.addEventListener("click", function() {
    playRound('paper');
});

scissorsButton.addEventListener("click", function() {
    playRound('scissors');
});

resetButton.addEventListener('click', resetGame);
function resetGame() {
    playerWins = 0;
    computerWins = 0;
    winsText.textContent = "Player: " + playerWins + ", Computer: " + computerWins;
    choiceText.textContent = "Make a choice!";
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    choiceText.textContent = "You chose " + playerChoice + " and the computer chose " + computerChoice;

    if (playerWins === 5)
    {
        winsText.textContent = "You've won the Best out of 5";
        resetGame();

    } 
    else if (computerWins === 5)
    {
        winsText.textContent = "You've lost the Best out of 5";
        resetGame();

    }else if (playerChoice === computerChoice) {
        winsText.textContent = "It was a tie! Player: " + playerWins + ", Computer: " + computerWins;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerWins++;
        winsText.textContent = "You've won! Player: " + playerWins + ", Computer: " + computerWins;
    } else {
        computerWins++;
        winsText.textContent = "You lost. Player: " + playerWins + ", Computer: " + computerWins;
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


