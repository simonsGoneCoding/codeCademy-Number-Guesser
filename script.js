let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, secret) {
  const humanDifference = Math.abs(secret - human);
  const compDifference = Math.abs(secret - computer);
  return humanDifference <= compDifference ? true : false;
}

function updateScore(win) {
  switch (win) {
    case "human":
      return humanScore++;
      break;

    case "computer":
      return computerScore++;
      break;
  }
}

const advanceRound = () => currentRoundNumber++;
