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

getComputerChoice();

function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors");
    if(choice != "rock" && choice != "paper" && choice != "scissors"){
        alert("invalid input");
    }else{
        console.log(choice);
        return choice;
    }
}

getHumanChoice();