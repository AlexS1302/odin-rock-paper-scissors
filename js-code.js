
humanScore = 0
computerScore = 0

function getComputerChoice() {
    let number = Math.random();
    if (number < 0.2){
        console.log("Computer: Rock");
        return "Rock";
    }
    else if (number > 0.2 && number < 0.6){
        console.log("Computer: Paper");
        return "Paper";
    }
    else {
        console.log("Computer: Scissors");
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice
    do {
        choice = prompt("Rock, Paper or Scissors?")
        choice = choice.toLowerCase()
        if (choice === "rock") {
            console.log("Human: Rock");
            return "Rock";
            
    }
        else if (choice === "paper") {
            console.log("Human: Paper");
            return "Paper";
    }
        else if (choice === "scissors") {
            console.log("Human: Scissors");
            return "Scissors";
    }
    } while (choice != "rock" && choice != "paper" && choice != "scissors")
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return console.log("Tie!");
    }
    else {
        switch (humanChoice) {
            case "Rock":
                switch (computerChoice) {
                    case "Paper":
                        console.log("You lose! Paper beats Rock.")
                        break;
                    
                    case "Scissors":
                        console.log("You win! Rock beats Scissors.")
                        break;
                }
                break;
            case "Paper":
                switch (computerChoice) {
                    case "Rock":
                        console.log("You win! Paper beats Rock.")
                        break;

                    case "Scissors":
                        console.log("You lose! Scissors beat Paper.")
                        break;
                }
                break;
            case "Scissors":
                switch (computerChoice) {
                    case "Rock":
                        console.log("You lose! Rock beats Scissors.")
                        break;
                    
                    case "Paper":
                        console.log("You win! Scissors beat Paper.")
                        break;
                }
                break;
        }

    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);