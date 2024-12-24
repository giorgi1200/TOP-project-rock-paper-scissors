function getComputerChoice() {
    let number = Math.random();
    if (number < 0.33) {
        return "rock";
    } else if (number >= 0.33 && number <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

const buttons = document.querySelectorAll("#buttons button");

const results = document.getElementById("result-message");

const computerChoosed = document.getElementById("computer-choise");

const resetButton = document.getElementById("reset-button")

let humanScoreResult = 0; // Store as integer
let computerScoreResult = 0; // Store as integer

// Update text content initially with 0
document.getElementById("human-score-result").textContent = humanScoreResult;
document.getElementById("computer-score-result").textContent = computerScoreResult;


computerChoosed.textContent = "";

humanScoreResult.textContent = 0;
computerScoreResult.textContent = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const humanSelection = button.id.toLowerCase(); 
        const computerSelection = getComputerChoice(); 
        
        playRound(humanSelection, computerSelection);
        computerChoosedFunction(computerSelection);
    });
});

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        results.textContent = "It's a tie";
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        results.textContent = "You win this round!";
        humanScoreResult += 1;
    } else {
        results.textContent = "Computer wins this round!";
        computerScoreResult += 1;
    }

    document.getElementById("human-score-result").textContent = humanScoreResult;
    document.getElementById("computer-score-result").textContent = computerScoreResult;

}

function computerChoosedFunction(computerSelection) {
    if (computerSelection === "rock") {
        computerChoosed.textContent = "🪨";
    } else if (computerSelection === "paper") {
        computerChoosed.textContent = "📄";
    } else {
        computerChoosed.textContent = "✂️";
    }
}


function scoreResults(){
    if (results == "You win this round!"){
        humanScoreResult += 1;
    } else if (results == "Computer wins this round!") {
        computerScoreResult += 1;
    } else {
        return
    }
}
scoreResults()

function resetGame(){
    humanScoreResult = 0;
    computerScoreResult = 0;
    document.getElementById("human-score-result").textContent = humanScoreResult;
    document.getElementById("computer-score-result").textContent = computerScoreResult;
    results.textContent = "";
    computerChoosed.textContent = "";

}

resetButton.addEventListener("click", resetGame);
