let choices = ['rock','paper','scissors']
let choice;

function getComputerChoice()
{
    choice = choices[(Math.floor(Math.random() * choices.length))];
    return choice;
}

getComputerChoice();
console.log(choice);