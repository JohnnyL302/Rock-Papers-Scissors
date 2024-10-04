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

cmp_choice = getComputerChoice(3) 
console.log(cmp_choice)

function getHumanChoice(num) {
    user_choice = prompt("Please select 'Rock', 'Paper', 'Scissors' ; ")
    return user_choice.toLowerCase(); 
} 

player_choice = getHumanChoice()
console.log(player_choice)

