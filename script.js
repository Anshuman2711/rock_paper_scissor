// Function to play the entire game
function playGame() {
    // Score variables
    let humanScore = 0;
    let computerScore = 0;

    // Function to get the human choice using prompt
    function getHumanChoice() {
        let choice;
        do {
            choice = prompt("Please enter your choice for this round: rock, paper, or scissors");
            if (choice) {
                choice = choice.toLowerCase().trim();
            }
        } while (!choice || (choice !== "rock" && choice !== "paper" && choice !== "scissors"));
        return choice;
    }

    // Function to get the computer choice without using an array
    function getComputerChoice() {
        const randomNum = Math.floor(Math.random() * 3); // Generates 0, 1, or 2
        if (randomNum === 0) {
            return "rock";
        } else if (randomNum === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    // Function to play a single round
    function playRound(roundNumber) {
        console.log(`\nRound ${roundNumber}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        // Display user and computer choices
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer's choice: ${computerChoice}`);

        // Display initial scores
       // console.log(`Initial Scores - Human: ${humanScore}, Computer: ${computerScore}`);

        // Determine the winner
        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
        }

        // Display current scores
        console.log(`Updated Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // Play 5 rounds
    let currentRound = 1;
    while (currentRound <= 5) {
        playRound(currentRound);
        currentRound++;
    }

    // Declare overall winner
    console.log("\nFinal Scores:");
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game. Better luck next time!");
    } else {
        console.log("It's a draw!");
    }
}

// Example usage:
playGame();
