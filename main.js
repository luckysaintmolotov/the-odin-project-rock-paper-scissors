
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

function playGame(rounds){
    let user_score = 0
    let computer_score = 0
    let round = 0
    while (round < rounds){
        let user_choice = getHumanChoice()
        let computer_choice = getComputerChoice().toLowerCase()
        let result = playRound(user_choice, computer_choice)
        if (result === "You win!")
        {
            user_score += 1
        }
        else if (result === "You lose!")
        {
            computer_score += 1
        }
        console.log(`Round ${round + 1}: You chose ${user_choice}, computer chose ${computer_choice}. ${result}`)
        round += 1

    }}

playGame(5)