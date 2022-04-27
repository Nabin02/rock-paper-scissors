function computerPlay() {
    let randomNumber = Math.floor(Math.random()*2);
    if (randomNumber === 0) {
        return ("Rock")
    } else if  (randomNumber === 1) {
        return ("Paper")
    } else if (randomNumber === 2) {
        return ("Scissors")
    }
}

function roundPlay(playerSelection, computerSelection) {
    const yourChoice = playerSelection.toLowerCase();
    const computerPlay = computerSelection.toLowerCase();

if (yourChoice === "rock" && computerPlay === "rock") {
    return "Thats a Match, no one wins this round";
} else if (yourChoice === "paper" && computerPlay === "paper") {
    return "Thats a Match, no one wins this round";
} else if (yourChoice === "scissors" && computerPlay === "scissors") {
    return "Thats a Match, no one wins this round";
} else if (yourChoice === "rock" && computerPlay === "scissors") {
    return "You Win! Rock beats Scissors";
} else if (yourChoice === "paper" && computerPlay === "rock") {
    return "You Win! Paper beats Rock";
} else if (yourChoice === "scissors" && computerPlay === "rock") {
    return "You Loose! Rock beats Scissors";
} else if (yourChoice === "rock" && computerPlay === "paper") {
    return "You Loose! Paper Beats Rock";
} else if (yourChoice === "paper" && computerPlay === "scissors") {
    return "You Loose! Scissors beats Paper";
} else if (yourChoice === "scissors" && computerPlay === "paper") {
    return "You Win! Scissors beats Paper";
}
}