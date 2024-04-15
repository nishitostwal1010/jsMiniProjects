const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let wins = 0;
let loss = 0;

playerDisplay.textContent = `Your choice : `;
computerDisplay.textContent = `Computer choice :`;
playerScore.textContent = wins;
computerScore.textContent = loss;

function playgame(playerChoice) {

    const choices = ['rock','paper','scissors'];
    const computerChoice = choices[Math.floor(Math.random()*3)];

    let result = "";

    if(playerChoice == computerChoice) {
        result = "It's a draw";
    }
    
    else {
        switch(playerChoice) {
            case "rock" :
                result = (computerChoice==="scissors") ? "You won" : "You lose";
                break;        
            case "paper" :
                result = (computerChoice==="rock") ? "You won" : "You lose";
                break;
            case "scissors" :
                result = (computerChoice==="paper") ? "You won" : "You lose";
                break;
        }
    }

    resultDisplay.classList.remove("green", "red");

    playerDisplay.textContent = `Your choice : ${playerChoice}`;
    computerDisplay.textContent = `Computer choice : ${computerChoice}`;
    resultDisplay.textContent = result;

    if(result=="You won") {  
        resultDisplay.classList.add("green");
        wins++;
        playerScore.textContent = `${wins}`;
    }

    if(result=="You lose") {
        resultDisplay.classList.add("red");
        loss++;
        computerScore.textContent = `${loss}`;
    }

}