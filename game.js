choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
};

function getPlayerChoice() {
    
    let playerChoice = prompt("What is your choice? A for Rock, B for Scissors, or C for Paper: ");

    do {
        playerChoice;

        if (playerChoice.toUpperCase() === 'A') {
            return choices[0];
        }
        else if (playerChoice.toUpperCase() === 'B') {
            return choices[1];
        }
        else if (playerChoice.toUpperCase() === 'C') {
            return choices[2];
        }
        else {
            alert("Incorrect value. Try again.");
            playerChoice = prompt("What is your choice? A for Rock, B for Scissors, or C for Paper: ");
        };
    } while ((playerChoice != 'A') || (playerSelection != 'B') || (playerSelection != 'C'));
};

function decideWinner(computerChoice, playerChoice) {
    if (computerChoice === choices[0] && playerChoice === choices[2]) {
        return "computer";
    }
    else if (computerChoice === choices[1] && playerChoice === choices[0]) {
        return "computer";
    }
    else if (computerChoice === choices[2] && playerChoice === choices[1]) {
        return "computer";
    }
    else if (computerChoice === playerChoice) {
        return "tie";
    }
    else {
        return "player";
    };
};


function playRound(numCompwins, numPlaywins, numTies) {
    let computerChoice;
    let playerChoice;
    let winner;

    computerChoice = getComputerChoice();
    playerChoice = getPlayerChoice();
    console.log("Computer choice: " + computerChoice);
    console.log("Player choice: " + playerChoice);

    winner = decideWinner(computerChoice, playerChoice);
    console.log("Winner: " + winner);
    return winner;
};

function game() {

    let numCompwins = 0;
    let numPlaywins = 0;
    let numTies = 0;
    let winner;

    for (i=0; i<5; i++) {
        winner = playRound(numCompwins, numPlaywins, numTies);
        if (winner == "computer") {
            numCompwins++;
            console.log("Number of computer wins: " + numCompwins);
            console.log("Number of player wins: " + numPlaywins);
            console.log("Number of ties: " + numTies)
            console.log("----------------------------");
        }
        else if (winner  == "player") {
            numPlaywins++;
            console.log("Number of computer wins: " + numCompwins);
            console.log("Number of player wins: " + numPlaywins);
            console.log("Number of ties: " + numTies)
            console.log("----------------------------");
        }
        else {
            numTies++;
            console.log("Number of computer wins: " + numCompwins);
            console.log("Number of player wins: " + numPlaywins);
            console.log("Number of ties: " + numTies)
            console.log("----------------------------");
        }; 
    };

    if (numCompwins > numPlaywins) {
        console.log("The computer beat you! Better luck next time...");
    }
    else if (numCompwins < numPlaywins) {
        console.log("You beat the computer! Great job!");
    }
    else {
        console.log("It's a tie! Try again!");
    };

}