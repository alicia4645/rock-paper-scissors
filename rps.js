var computerScore = 0;
var playerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const buttons = document.querySelectorAll("button");

let humanChoice;

const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

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
        humanChoice = event.target.id;
        console.log(humanChoice);
        playGame(humanChoice);
    });
});

function playRound( humanChoice , computerChoice){
    if(humanChoice == computerChoice){
        console.log("Its a draw!");
    } else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            console.log("You win! Rock beats scissors");
            playerScore++;
        }else if(computerChoice == "paper"){
            console.log("You lose! Paper beats scissors");
            computerScore++;
        }
    } else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            console.log("You win! Paper beats rock");
            playerScore++;
        }else if(computerChoice == "scissors"){
            console.log("You lose! scissors beats paper");
            computerScore++;
        }
    } else if (humanChoice == "scissors"){
        if(computerChoice == "paper"){
            console.log("You win! Scissors beats paper");
            playerScore++;
        }else if(computerChoice == "rock"){
            console.log("You lose! rock beats scissors");
            computerScore++;
        }
    }

    playerScoreText.textContent = `Player: ${playerScore}` 
    computerScoreText.textContent = `Computer: ${computerScore}`
}

function playGame(humanSelection){
    let computerSelection = getComputerChoice();
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



