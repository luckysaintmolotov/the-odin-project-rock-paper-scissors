// Function to generate a random integer between 0 (inclusive) and max (exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to get the computer's choice (rock, paper, or scissor)
function getComputerChoice() {
    let integer = getRandomInt(3); // Generate a random integer from 0 to 2
    if (integer === 0) {
        return "rock"; // Return "rock" if the integer is 0
    } else if (integer === 1) {
        return "paper"; // Return "paper" if the integer is 1
    } else {
        return "scissor"; // Return "scissor" if the integer is 2
    }
}

// Function to get the human player's choice through a prompt
function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissor?").toLowerCase(); // Prompt the user for input
    return choice; // Return the user's choice
}

// Function to play a round of the game and determine the result
function playRound(user_choice, computer_choice) {
    const win_conditions = {
        "rock": "scissor", // Rock beats Scissor
        "paper": "rock",    // Paper beats Rock
        "scissor": "paper"  // Scissor beats Paper
    };

    if (user_choice === computer_choice) {
        return "It's a tie!"; // Return tie if both choices are the same
    } else if (win_conditions[user_choice] === computer_choice) {
        return "You win!"; // Return win if the user's choice beats the computer's choice
    } else {
        return "You lose!"; // Return lose if the computer's choice beats the user's choice
    }
}

// Function to handle the click event for the game
function onClickPlay(choice) {
    let user_choice = choice; // Get the user choice from the parameter
    let computer_choice = getComputerChoice(); // Get the computer choice
    let result = playRound(user_choice, computer_choice); // Play the round
    console.log(`You chose ${user_choice}, computer chose ${computer_choice}. ${result}`); // Log the result
    document.getElementById("result").innerText = `Result: You chose ${user_choice}, computer chose ${computer_choice}. ${result}`.toUpperCase();
}

// Function to play multiple rounds of the game
function playGame(rounds) {
    let user_score = 0; // Initialize user score
    let computer_score = 0; // Initialize computer score
    let round = 0; // Initialize round counter

    while (round < rounds) {
        let user_choice = getHumanChoice(); // Get the user's choice
        let computer_choice = getComputerChoice().toLowerCase(); // Get the computer's choice
        let result = playRound(user_choice, computer_choice); // Play the round

        // Update scores based on the result
        if (result === "You win!") {
            user_score += 1; // Increment user score if they win
        } else if (result === "You lose!") {
            computer_score += 1; // Increment computer score if the user loses
        }

        console.log(`Round ${round + 1}: You chose ${user_choice}, computer chose ${computer_choice}. ${result}`);
        round += 1; // Increment the round counter
    }
}

// Assign click events to the elements for user interaction
document.getElementById("rock").onclick = function() { onClickPlay("rock"); };
document.getElementById("paper").onclick = function() { onClickPlay("paper"); };
document.getElementById("scissor").onclick = function() { onClickPlay("scissor"); };
