const div = document.createElement('div');
const playerScoreDiv = document.createElement('div');
const computerScoreDiv = document.createElement('div');
let computerScore = 0;
let playerScore = 0;

function checkWinner() {
    if (playerScore == 5) {

        div.textContent = "YOU WIN!";
        container.appendChild(div);
        computerScore = 0;
        playerScore = 0;
    }
    if (computerScore == 5) {

        div.textContent = "You Lose!";
        container.appendChild(div);
        computerScore = 0;
        playerScore = 0;

    }
}

let playerChoice = "";
const scoreContainer = document.querySelector("#score-container");
const container = document.querySelector("#container");

const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => {
    playerChoice = "scissors";
    playRounds(playerChoice); 
});

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', () => {
    playerChoice = "rock";
    playRounds(playerChoice);
});

const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => {
    playerChoice = "paper";
    playRounds(playerChoice);
})

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "paper";
    }
    if (choice == 1) {
        return "rock";
    }
    if (choice == 2) {
        return "scissors";
    }
}
function playRounds(playerSelection) {
    if (container.contains(div)) {
        container.removeChild(div);
    }
    let computerSelection = getComputerChoice();
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            div.textContent = "You Lose! Paper beats Rock";
            container.appendChild(div);
            computerScore += 1;
            checkWinner();
        }
        if (computerSelection == "rock") {
            div.textContent = "You Tie! Both Rocks does Nothing";
            container.appendChild(div);
        }
        if (computerSelection == "scissors") {
            div.textContent = "You Win! Rock Beats Scissors";
            container.appendChild(div);
            playerScore += 1;
            console.log(playerScore);
            checkWinner();
        }
    }
    if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            div.textContent = "You Tie! Both Papers does nothing";
            container.appendChild(div);
        }
        if (computerSelection == "rock") {
            div.textContent = "You Win! Paper Beats Rock";
            container.appendChild(div);
            playerScore += 1;
            checkWinner();
        }
        if (computerSelection == "scissors") {
            div.textContent = "You Lose! Paper Loses to Scissors";
            container.appendChild(div);
            computerScore += 1;
            checkWinner();
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            div.textContent = "You Win! Scissors Beats Paper";
            container.appendChild(div);
            playerScore += 1;
            checkWinner();
        }
        if (computerSelection == "rock") {
            div.textContent = "You Lose! Scissors Loses to Rock";
            container.appendChild(div);
            computerScore += 1;
            checkWinner();
        }
        if (computerSelection == "scissors") {
            div.textContent = "You Tie! Both Scissors does nothing";
            container.appendChild(div);

        }
    }
    playerScoreDiv.textContent = "Player Score: " + playerScore;
    computerScoreDiv.textContent = "Computer Score: " + computerScore;
    scoreContainer.appendChild(playerScoreDiv);
    scoreContainer.appendChild(computerScoreDiv);

    
}