
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
        console.log("Tie!");
        return "tie";
    }
    else {
        switch (humanChoice) {
            case "Rock":
                switch (computerChoice) {
                    case "Paper":
                        console.log("You lose! Paper beats Rock.")
                        return "computer";
                    
                    case "Scissors":
                        console.log("You win! Rock beats Scissors.")
                        return "human";
                }
            case "Paper":
                switch (computerChoice) {
                    case "Rock":
                        console.log("You win! Paper beats Rock.")
                        return "human";

                    case "Scissors":
                        console.log("You lose! Scissors beat Paper.")
                        return "computer";
                }
            case "Scissors":
                switch (computerChoice) {
                    case "Rock":
                        console.log("You lose! Rock beats Scissors.")
                        return "computer";
                    
                    case "Paper":
                        console.log("You win! Scissors beat Paper.")
                        return "human";
                }
        }

    }

}

function playGame() {

    let rounds = 0;
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        rounds++;

    }
    
    console.log(`Final Score: Human ${humanScore}, Computer ${computerScore}`);

}

playGame();