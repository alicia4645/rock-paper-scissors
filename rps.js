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
    console.log(choice);
    return choice;
}

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        playerChoice = event.target.id;
        console.log(playerChoice);
        playGame(playerChoice);
    });
});

function playRound( humanChoice , computerChoice){
    if(humanChoice == computerChoice){
        message.textContent = "Its a draw!";
    } else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            message.textContent = "Rock beats scissors";
            playerScore++;
        }else if(computerChoice == "paper"){
            message.textContent = "Paper beats scissors";
            computerScore++;
        }
    } else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            message.textContent = "Paper beats rock";
            playerScore++;
        }else if(computerChoice == "scissors"){
            message.textContent = "Scissors beats paper";
            computerScore++;
        }
    } else if (humanChoice == "scissors"){
        if(computerChoice == "paper"){
            message.textContent = "Scissors beats paper";
            playerScore++;
        }else if(computerChoice == "rock"){
            message.textContent = "Rock beats scissors";
            computerScore++;
        }
    }
    playerScoreText.textContent = `Player: ${playerScore}` 
    computerScoreText.textContent = `Computer: ${computerScore}`
}

function showChoices(humanChoice, computerChoice){
    playerChoiceImage.src = `${humanChoice}.jpg`
    computerChoiceImage.src = `${computerChoice}.jpg`
}

function playGame(humanSelection){
    let computerSelection = getComputerChoice();
    showChoices(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
   
    console.log("computer: " + computerScore);
    console.log("player: " + playerScore);
    if(computerScore == playerScore){
        console.log("Its a draw!");
    }else if(computerScore > playerScore){
        console.log("Computer wins!");
    }else if(computerScore <playerScore){
        console.log("You win!");
    }
}



