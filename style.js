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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

let answer = parseInt(prompt("Please enter the number of rounds you would like to play: "));

for (let i = 0; i <= answer; i++) {
const playerSelection = prompt("Choose one: Rock, Paper, or Scissors?")

    if (
        roundPlay(playerSelection, computerPlay()) ===
        "Thats a Match, no one wins this round"
    ) {
        drawScore += 1;
        console.log("Thats a Match, no one wins this round");
    }
    
    else if (
        roundPlay(playerSelection, computerPlay()) ===
        "You Win! Rock beats Scissors"
    ) {
        playerScore += 1;
        console.log("You Win! Rock beats Scissors");
    }
    
    else if (
        roundPlay(playerSelection, computerPlay()) ===
        "You Win! Rock beats Scissors"
    ) {
        playerScore += 1;
        console.log("You Win! Rock beats Scissors");
    }
    
    else if (
        roundPlay(playerSelection, computerPlay()) ===    
        "You Win! Paper beats Rock"
    ) {
        playerScore += 1;
        console.log("You Win! Paper beats Rock");
    }
    
    else if (
        roundPlay(playerSelection, computerPlay()) ===    
        "You Loose! Rock beats Scissors"
    ) {
        computerScore += 1;
        console.log("You Loose! Rock beats Scissors");
    }
    
    else if (
        roundPlay(playerSelection, computerPlay()) ===    
        "You Loose! Paper Beats Rock"
    ) {
        computerScore += 1;
        console.log("You Loose! Paper Beats Rock");
    }
    
    else if (
        roundPlay(playerSelection, computerPlay()) ===  
        "You Loose! Scissors beats Paper"
    ) {
        computerScore += 1;
        console.log("You Loose! Paper Beats Rock");
    }
    
    else if (
        roundPlay(playerSelection, computerPlay()) ===  
        "You Win! Scissors beats Paper"
    ) {
        playerScore += 1;
        console.log("You Win! Scissors beats Paper");
    }
    console.log("Your Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    console.log("Number of Draw Games: " + drawScore);
    console.log("Number of Games Played: " +i);
}

if (i = 5 && playerScore > computerScore) {
    console.log("Congrats! You have beat a Computer. You are smarter than a Computer");
} else if (i = 5 && playerScore < computerScore) {
    console.log("True as old tales, you can not beat a computer. Ever!");
} else if (i = 5 && playerScore === computerScore) {
    console.log("Try Better Next Time! Only a Draw because the computer lagged a little LOL.");
}
}

game();