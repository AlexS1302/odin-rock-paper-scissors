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
    let choice = prompt("Rock, Paper or Scissors?")
    if (choice.toLowerCase() === "rock") {
        return console.log("Rock")
    }
    else if (choice.toLowerCase() === "paper") {
        return console.log("Paper")
    }
    else if (choice.toLowerCase() === "scissors") {
        return console.log ("Scissors")
    }
}

getHumanChoice()
