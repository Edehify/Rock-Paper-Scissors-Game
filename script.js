// Get all the possible option of the human choice
const humanChoice = document.querySelectorAll("[data-button]");

//get restate button
const restartButton = document.querySelector(".restart-button");

//get score display
const scoreDisplay = document.querySelector(".scoreDisplay");

// get rounds
const gameRound = document.querySelector(".gameRound");

const gameOverMessage = document.querySelector(".game-over-message");


const score = document.querySelector(".score");
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;


  humanChoice.forEach(choice => {
    choice.addEventListener("click", (e) => {
      e.preventDefault();
      gameRound.textContent = `Round ${roundCount} of 5`;
      if(roundCount < 5){
            userChoice =e.target.getAttribute("data-button");
            let computerChoice = getComputerChoice();
          let result = playRound(userChoice, computerChoice)

          if (result === "human") {
            humanScore++;
          } else if (result === "computer") {
            computerScore++;
          }
          roundCount++;

          scoreDisplay.textContent=`Score: You ${humanScore} - Computer ${computerScore}`;
        
        }
        if(roundCount === 5) {
          // Declare final winner
          if (humanScore > computerScore) {
            score.textContent="🎉 You win the game!";
          } else if (computerScore > humanScore) {
            score.textContent="😞 Computer wins the game!";
          } else {
            score.textContent="🤝 It's a draw!";
          }
          restartButton.hidden = false;
          // disable all human choice button
            humanChoice.forEach(btn => btn.disabled = true);

            gameOverMessage.hidden = false;
        }
      });
    });

restartButton.addEventListener("click", ()=>{
   humanScore = 0;
    computerScore = 0;
     roundCount = 0;

     scoreDisplay.textContent ="Score: You 0 - Computer 0";
      restartButton.hidden = true;
      gameRound.textContent = "Round 0 of 5";
      score.textContent = "";
          // enable humnan choice button
        humanChoice.forEach(btn => btn.disabled = false);
        gameOverMessage.hidden = true;
})












function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choice[randomIndex];
}


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


function playRound(human, computer) {
    if(human === computer) {
      score.textContent =`It is a tie! Computer chose ${computer} and you chose ${human}`;
      return "tie";
    }
    else if(
    (human === "Rock" && computer === "Scissors") ||
    (human === "Scissors" && computer === "Paper") ||
    (human === "Paper" && computer === "Rock"))
   {
    score.textContent = `You Win! ${human} beats ${computer}`;
    return "human";
  } 
  else {
    score.textContent = `You lose! ${computer} beats ${human}`;
    return "computer";
  }

}



