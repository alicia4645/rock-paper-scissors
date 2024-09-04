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
