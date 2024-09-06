var computerScore = 0;
var playerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const buttons = document.querySelectorAll("button");

let playerChoice;

const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

const playerChoiceImage = document.querySelector("#playerChoice");
const computerChoiceImage = document.querySelector("#computerChoice");

const message = document.querySelector("#message");

const replay = document.querySelector("#replay");



function getComputerChoice(){
    let choice;
    let value = Math.random();
    if (value >= 0 && value <=0.3 ){
        choice = "rock";
    }else if (value > 0.3 && value <=0.6) {
        choice = "paper"
    } else {
        choice = "scissors"
    }
    return choice;
}



buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        playerChoice = event.target.id;
        playGame(playerChoice);
    });
});

function playRound( humanChoice , computerChoice){
    if(humanChoice == computerChoice){
        message.textContent = "Its a draw!";
    } else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            message.textContent = "Rock beats Scissors";
            playerScore++;
        }else if(computerChoice == "paper"){
            message.textContent = "Paper beats Scissors";
            computerScore++;
        }
    } else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            message.textContent = "Paper beats Rock";
            playerScore++;
        }else if(computerChoice == "scissors"){
            message.textContent = "Scissors beats Paper";
            computerScore++;
        }
    } else if (humanChoice == "scissors"){
        if(computerChoice == "paper"){
            message.textContent = "Scissors beats Paper";
            playerScore++;
        }else if(computerChoice == "rock"){
            message.textContent = "Rock beats Scissors";
            computerScore++;
        }
    }
    playerScoreText.textContent = `Player: ${playerScore}` 
    computerScoreText.textContent = `Computer: ${computerScore}`

    if(playerScore >= 5 || computerScore >=5) {endGame();}
}

function showChoices(humanChoice, computerChoice){
    playerChoiceImage.src = `${humanChoice}.jpg`
    computerChoiceImage.src = `${computerChoice}.jpg`
}

function playGame(humanSelection){
    let computerSelection = getComputerChoice();
    showChoices(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
}

function endGame(){
    buttons.forEach((button) => {
        button.replaceWith(button.cloneNode(true))
    });

    if(computerScore == playerScore){
        message.textContent = "Its a draw!";
    }else if(computerScore > playerScore){
         message.textContent = "Computer wins!";
    }else if(computerScore <playerScore){
         message.textContent = "You win!";
    }

    const playAgain = document.createElement("button");
    playAgain.classList.add("#replay")
    playAgain.textContent = "Play Again"
    playAgain.addEventListener('click', () => {
        location.reload();
    });
    replay.appendChild(playAgain);
}


