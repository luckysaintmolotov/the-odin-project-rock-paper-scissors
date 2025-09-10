
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}
function getComputerChoice(){
    let integer = getRandomInt(3);
    if (integer === 0){
        return "Rock"
    }
    else if (integer === 1){
        return "Paper"
    }
    else {
        return "Scissor"
    }

}
function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissor?").toLowerCase()
    return choice
    }

function playRound(user_choice, computer_choice){
    const win_conditions = {
        "rock": "scissor",
        "paper": "rock",
        "scissor": "paper"
    }
    
    if (user_choice === computer_choice)
    {
        return "It's a tie!"
    }
    else if (win_conditions[user_choice] === computer_choice)
    {
        return "You win!"
    }
    else 
    {
        return "You lose!"
    }
}
const computerChoice = getComputerChoice()
const humanChoice = getHumanChoice()
console.log(playRound(humanChoice,computerChoice))