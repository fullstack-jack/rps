//  UI
const display = document.querySelector("div")

const btns = document.querySelectorAll("button")

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        const choices = ["rock", "paper", "scissors"]
        const humanChoice = e.target.textContent.toLowerCase()
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]
        playRound(humanChoice, computerChoice)
    })
})

// LOGIC
let humanScore = 0
let computerScore = 0

const playRound = (humanChoice, computerChoice) => {
    display.textContent = ""
    display.append(`Player chose: ${humanChoice} and Computer chose: ${computerChoice}.`)

    if (humanChoice === computerChoice) {
        display.append(` It's a tie! Player score is ${humanScore} and computer score is ${computerScore}`)
        return
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++
        display.append(` Player wins this round! Player score is ${humanScore} and computer score is ${computerScore}`)
        return
    }
    computerScore++
    display.append(` Computer wins this round! Player score is ${humanScore} and computer score is ${computerScore}`)

    if (humanScore === 5) {
        display.append(" Player wins the game!")
        humanScore = 0
        computerScore = 0

    } else if (computerScore === 5) {
        display.append(" Computer wins the game!")
        humanScore = 0
        computerScore = 0
    }
}
    






