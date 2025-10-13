let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

const getHumanChoice = () => {
    let choice = prompt("Please choose either: rock, paper, or scissors")
    return choice.toLowerCase()
}

const playRound = (humanChoice, computerChoice) => {
    console.log(`Player chose: ${humanChoice}, Computer chose: ${computerChoice}`)

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        return
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("Player wins this round!")
        humanScore++
        return
    }

    console.log("Computer wins this round!")
    computerScore++
}

for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    console.log(`Score after round ${i + 1} -> Player: ${humanScore}, Computer: ${computerScore}`)
}

if (humanScore > computerScore) {
    console.log("Player wins the game!")
} else if (computerScore > humanScore) {
    console.log("Computer wins the game!")
} else {
    console.log("The game is a tie!")
}
