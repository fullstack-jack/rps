// UI
const display = document.querySelector("div");
const btns = document.querySelectorAll("button");

// Scores
let humanScore = 0;
let computerScore = 0;

// Event listeners
btns.forEach(btn => {
    btn.addEventListener("click", e => {
        const choices = ["rock", "paper", "scissors"];
        const humanChoice = e.target.textContent.toLowerCase();
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        playRound(humanChoice, computerChoice);
    });
});

// Game logic
function playRound(humanChoice, computerChoice) {
    display.textContent = `Player chose: ${humanChoice}, Computer chose: ${computerChoice}. `;

    if (humanChoice === computerChoice) {
        display.textContent += `It's a tie! Player: ${humanScore}, Computer: ${computerScore}.`;
        return;
    }

    const playerWins =
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock");

    if (playerWins) {
        humanScore++;
        display.textContent += `Player wins this round! `;
    } else {
        computerScore++;
        display.textContent += `Computer wins this round! `;
    }

    display.textContent += `Scores - Player: ${humanScore}, Computer: ${computerScore}.`;

    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ? "Player" : "Computer";
        display.textContent = `${winner} wins the game! Final score — Player: ${humanScore}, Computer: ${computerScore}. Game will reset.`;
        humanScore = 0;
        computerScore = 0;
    }
}
