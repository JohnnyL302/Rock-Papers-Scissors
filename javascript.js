function getComputerChoice(num) {
    choice = Math.floor(Math.random() * num)
    if (choice === 0) {
        return "rock"; 
    }
    else if (choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(num) {
    user_choice = prompt("Please select 'Rock', 'Paper', 'Scissors' ; ")
    return user_choice.toLowerCase(); 
} 

function playRound(humanChoice, computerChoice) {
    if ( (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "rock" && computerChoice === "paper") 
        || (humanChoice === "scissors" && computerChoice ===  "rock") ) {
            console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`)
            computerScore++; 
        } 
    else if ( (humanChoice === "paper" && computerChoice === "rock") || (humanChoice  === "rock" &&  computerChoice === "scissors") || 
        (humanChoice  === "scissors" && computerChoice ===  "paper") ) {
            console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0) + computerChoice.slice(1)}.`)
            humanScore++;
        }
    else {
        console.log("It's a tie!")
    } 

}

cmp_choice = getComputerChoice(3) 
console.log(cmp_choice)
player_choice = getHumanChoice()
console.log(player_choice)

let humanScore = 0  
let computerScore = 0

playRound(player_choice, cmp_choice);
