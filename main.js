
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