let computerChoosed = ""

function computerDecision(){
    let randomNumber = Math.random()


    if (randomNumber < 0.33){
        computerChoosed = "rock"
        document.getElementById("computer-choise").textContent = "🪨"
    }  else if (randomNumber > 0.66){
        computerChoosed = "paper"
        document.getElementById("computer-choise").textContent = "📄"
    } else {
        computerChoosed = "scissors"
        document.getElementById("computer-choise").textContent = "✂️"

    }
    console.log(computerChoosed)

}

const buttonPressed = document.querySelectorAll("#buttons button")

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("human-score-result").textContent = "0"
    document.getElementById("computer-score-result").textContent = "0"
})

buttonPressed.forEach(button => {
    button.addEventListener('click', function() {
        computerDecision()
        const playerChoise = button.id
        playerDecision(button.id)
        gameLogic(playerChoise, computerChoosed)
});
});


function playerDecision(buttonPressed){
    let playerPressed = ""
    if (buttonPressed == "rock") {
        playerPressed = "Player Choosed Rock"
    } else if (buttonPressed == "paper") {
        playerPressed = "player Choosed Paper"
    } else if (buttonPressed == "scissors") {
        playerPressed = "Player Choosed Scissors"
    } else {
        playerPressed = "Invalid Choice"
    }
    return playerPressed
}


let playerScore = 0
let computerScore = 0 

function gameLogic(playerChoise, computerChoosed) {
    if (playerChoise == computerChoosed){
        document.getElementById("result-message").textContent = "It's a tie"
    } else if (
        (playerChoise === "rock" && computerChoosed === "scissors") ||
        (playerChoise === "paper" && computerChoosed === "rock") ||
        (playerChoise === "scissors" && computerChoosed === "paper")
    ){
        document.getElementById("result-message").textContent = "You Win this round!"
        playerScore += 1
        document.getElementById("human-score-result").textContent = playerScore
    } else {
        document.getElementById("result-message").textContent = "Computer wins this round"

        computerScore += 1
        document.getElementById("computer-score-result").textContent = computerScore
    }

}


const refreshButton = document.getElementById("refresh-button");


refreshButton.addEventListener('click', () => 
{   
     playerScore = 0;
     computerScore = 0;
    document.getElementById("human-score-result").textContent = 0;
    document.getElementById("computer-score-result").textContent = 0;
    document.getElementById("computer-choise").textContent = " ";
})