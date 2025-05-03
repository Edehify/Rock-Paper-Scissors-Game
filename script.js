
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
    }
    else if(
    (human === "Rock" && computer === "Scissors") ||
    (human === "Scissors" && computer === "Paper") ||
    (human === "Paper" && computer === "Rock"))
   {
    console.log(`You Win! ${human} beats ${computer}`);
  } 
  else {
    console.log(`You lose! ${computer} beats ${human}`);
  }

}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice)
