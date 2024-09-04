var computerScore = 0;
var playerScore = 0;


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

function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors").toLowerCase();
    if(choice != "rock" && choice != "paper" && choice!= "scissors"){
        alert("invalid input");
    }else{
        console.log(choice);
        return choice;
    }
}

function playRound( humanChoice , computerChoice){
    if(humanChoice == computerChoice){
        console.log("Its a draw!");
    } else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            console.log("You win! Rock beats scissors");
            playerScore++;
            console.log(playerScore);
        }else if(computerChoice == "paper"){
            console.log("You lose! Paper beats scissors");
            computerScore++;
            console.log(computerScore);
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
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);