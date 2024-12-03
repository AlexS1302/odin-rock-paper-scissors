let humanScore = 0;
let computerScore = 0;

// Get computer choice
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

//Get human choice
const rockButton = document.querySelector("#rockBtn")
rockButton.addEventListener("click", () => {
    const humanChoice = "Rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

const paperButton = document.querySelector("#paperBtn")
paperButton.addEventListener("click", () => {
    const humanChoice = "Paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

});

const scissorsButton = document.querySelector("#scissorsBtn")
scissorsButton.addEventListener("click", () => {
    const humanChoice = "Scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});

// Main function
function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice === computerChoice) {
        result = "Tie!"
    }
    else {
        switch (humanChoice) {
            case "Rock":
                switch (computerChoice) {
                    case "Paper":
                        result = "You lose! Paper beats Rock."
                        computerScore++;
                        break;
                    
                    case "Scissors":
                        result = "You win! Rock beats Scissors."
                        humanScore++;
                        break;
                }
                break;
            case "Paper":
                switch (computerChoice) {
                    case "Rock":
                        result = "You win! Paper beats Rock."
                        humanScore++;
                        break;

                    case "Scissors":
                        result = "You lose! Scissors beat Paper."
                        computerScore++;
                        break;
                }
                break;
            case "Scissors":
                switch (computerChoice) {
                    case "Rock":
                        result = "You lose! Rock beats Scissors."
                        computerScore++;
                        break;
                    
                    case "Paper":
                        result = "You win! Scissors beat Paper."
                        humanScore++;
                        break;
                }
                break;
        }

    }
    updateResult(result);
    updateScore();
    checkWinner();
}

//Update result and score

function updateResult(result) {
    let resultDiv = document.getElementById("result");
    resultDiv.textContent = result;
}

function updateScore() {
    const ScoreDiv = document.getElementById("score");
    ScoreDiv.textContent = `Human: ${humanScore}, Computer: ${computerScore}`;
}

// Check winner and reset the game
function checkWinner() {
    if (humanScore === 5) {
        alert("Congratulations! You win the game.")
        resetGame();
    }
    else if (computerScore === 5) {
        alert("Computer wins the game!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    updateResult('');
}
