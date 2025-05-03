function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function getHumanChoice() {
  let choice = prompt("Choose Rock, Paper, or Scissors:");
  choice = choice.trim().toLowerCase();
  return capitalize(choice);
}
let humanChoice = getHumanChoice();
console.log(humanChoice);