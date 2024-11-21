console.log("Hello World")

function getComputerChoice() {
    let number = Math.random();
    if (number < 0.2){
        return "Rock";
    }
    else if (number > 0.2 && number < 0.6){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let choice
    do {
        choice = prompt("Rock, Paper or Scissors?")
        choice = choice.toLowerCase()
        if (choice === "rock") {
            return "Rock";
    }
        else if (choice === "paper") {
            return "Paper";
    }
        else if (choice === "scissors") {
            return "Scissors";
    }
    } while (choice != "rock" && choice != "paper" && choice != "scissors")
}

console.log(getHumanChoice())
