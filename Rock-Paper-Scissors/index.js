
const choises = ['rock', 'paper', 'scissors'];

const playerChoiseDisplay = document.getElementById('playerChoice');
const computerChoiseDisplay = document.getElementById('computerChoice');

const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDsiplay = document.getElementById('computerScore');
let playerScore = 0;
let computerScore = 0;

let result = "";

function playGame(playerChoise) {
    const computerChoice = choises[Math.floor(Math.random() * 3)];

    console.log(computerChoice);
    console.log(playerChoise);

    if (playerChoise === computerChoice) {
        result = `IT'S A TIE!`
    }
    else {
        switch (playerChoise) {
            case 'rock':
                result = (computerChoice === 'scissors') ? 'YOU WON!' : 'YOU LOSE!';
                break;

            case 'paper':
                result = (computerChoice === 'rock') ? 'YOU WON!' : 'YOU LOSE!';
                break;

            case 'scissors':
                result = (computerChoice === 'paper') ? 'YOU WON!' : 'YOU LOSE!';
                break;
        }
    }
    resultDisplay.classList.remove('red', 'green');

    switch (result) {
        case 'YOU WON!':
            resultDisplay.classList.add('green');
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case 'YOU LOSE!':
            resultDisplay.classList.add('red');
            computerScore++;
            computerScoreDsiplay.textContent = computerScore;
            break;
    }
    playerChoiseDisplay.textContent = `Player : ${playerChoise}`;
    computerChoiseDisplay.textContent = `Computer : ${computerChoice}`;
    resultDisplay.textContent = result;

}