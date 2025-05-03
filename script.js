let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
}


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function getHumanChoice() {
  let choice = prompt("Choose Rock, Paper, or Scissors:");
  choice = choice.trim().toLowerCase();
  return capitalize(choice);
}
function playRound(human, computer) {
    if(human === computer) {
      console.log(`It is a tie! Computer chose ${computer} and you chose ${human}`);
      return "tie";
    }
    else if(
    (human === "Rock" && computer === "Scissors") ||
    (human === "Scissors" && computer === "Paper") ||
    (human === "Paper" && computer === "Rock"))
   {
    console.log(`You Win! ${human} beats ${computer}`);
    return human;
  } 
  else {
    console.log(`You lose! ${computer} beats ${human}`);
    return computer;
  }

}

function playGame() {
  for(let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice)

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    console.log("------");
  }
   // Declare final winner
   if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("😞 Computer wins the game!");
  } else {
    console.log("🤝 It's a draw!");
  }
}


// start game
playGame();



