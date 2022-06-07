// Enum Values
const Values = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissor",
}

// Randomly return an enum value
function computerPlay() {
  var keys = Object.keys(Values);
  return Values[keys[keys.length * Math.random() << 0]];
};

function playRound(playerSelection, computerSelection) {
  // Directly returns a tie if the selection are the same
  if (playerSelection == computerSelection) {
    console.log("It's a tie!");
    return 'tie';
  }

  // Checks to see who won
  if ((playerSelection == Values.ROCK) && (computerSelection == Values.SCISSOR)
    || (playerSelection == Values.SCISSOR) && (computerSelection == Values.PAPER)
    || (playerSelection == Values.PAPER) && (computerSelection == Values.ROCK)
  ) {
    console.log(`Player Wins! ${playerSelection} beats ${computerSelection}`);
    return 'player'
  } else {
    console.log(`Computer Wins! ${computerSelection} beats ${playerSelection}`);
    return 'computer'
  }
}

// Converts input into enum value
function playerPlay(input) {
  if (input.toLowerCase() == "r") {
    return Values.ROCK;
  }
  if (input.toLowerCase() == "s") {
    return Values.SCISSOR;
  }
  if (input.toLowerCase() == "p") {
    return Values.PAPER;
  }
  return undefined;
}

// Main game loop 
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gamesPlayed = 0;


  while (gamesPlayed < 5) {
    let input = prompt("R: rock, P: paper, S: scissor");

    const playerSelection = playerPlay(input);
    const computerSelection = computerPlay();

    const status = playRound(playerSelection, computerSelection);
    if (status == 'player') {
      playerScore++;
    }
    if (status == 'computer') {
      computerScore++;
    }
    gamesPlayed++;
  }

  if (playerScore > computerScore) {
    console.log(`The winner is the player with a score of ${playerScore}:${computerScore}!`);
  } else if (computerScore > playerScore) {
    console.log(`The winner is the computer with a score of ${computerScore}:${playerScore}!`);
  } else {
    console.log("It's a tie!");
  }

}

game();


