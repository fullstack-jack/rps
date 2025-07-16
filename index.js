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

function getHumanChoice() {
    let choice = prompt("Please enter either 'rock', 'paper' or 'scissors':")
    return choice
}

function playGame() {

    let humanScore = 0 
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase()

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }
        
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }

    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
  
    console.log(`Final Score — You: ${humanScore}, Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game.");
    } else {
        console.log("The game is a tie.");
    }

} 
  
playGame();