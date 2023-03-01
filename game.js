function getComputerChoice() {
    let rock = "Rock!";
    let scissors = "Scissors!";
    let paper = "Paper!";
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return rock;
    }
    else if (choice === 1) { 
        return scissors;
    }
    else { 
        return paper;
    }
};

let computerSelection = getComputerChoice();

function getPlayerChoice() {
    let rock = "Rock!";
    let scissors = "Scissors!";
    let paper = "Paper!";
    let choice = prompt("What is your choice? A for Rock, B for Scissors, or C for Paper: ");
    if (choice.toUpperCase() === 'A') {
        return rock;
    }
    else if (choice.toUpperCase() === 'B') {
        return scissors;
    }
    else if (choice.toUpperCase() === 'C') {
        return paper;
    }
    else {
        prompt("Incorrect value. Try again.");
    }
};