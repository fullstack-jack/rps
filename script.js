let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

const getHumanChoice = () => {
    let choice = prompt("Please choose either: rock, 'paper' or 'scissors'")
    return choice.toLowerCase() 
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
        return
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log("Player wins!")
        humanScore++
        return
    }
    console.log("Computer wins!")
    computerScore++

}

playRound(getHumanChoice(), getComputerChoice())