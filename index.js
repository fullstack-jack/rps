// UI
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.textContent, getComputerChoice())
    })
})

// LOGIC
let humanScore = 0 
let computerScore = 0

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"; 
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const scoreboard = document.querySelector("div");
    
    if (humanChoice === computerChoice) {
        scoreboard.textContent = `It's a tie!
        The current score is Human ${humanScore} vs. Computer ${computerScore}`;
        return;
    }
    
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        scoreboard.textContent = `You win! ${humanChoice} beats ${computerChoice}. 
        The current score is Human ${humanScore} vs. Computer ${computerScore}`;
    } else {
        computerScore++;
        scoreboard.textContent = `You lose! ${computerChoice} beats ${humanChoice}.
        The current score is Human ${humanScore} vs. Computer ${computerScore}`;
    }

    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            scoreboard.textContent = "You won the game!";
        } else {
            scoreboard.textContent = "You lost the game.";
        }
        
        humanScore = 0
        computerScore = 0
}

}


  