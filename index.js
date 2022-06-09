// Enum Values
const Values = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissor",
}

let playerScore = 0;
let computerScore = 0;

// DOM elements
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

const playerRockImage = document.getElementById("player-rock-image");
const playerPaperImage = document.getElementById("player-paper-image");
const playerScissorImage = document.getElementById("player-scissor-image");

const computerRockImage = document.getElementById("computer-rock-image");
const computerPaperImage = document.getElementById("computer-paper-image");
const computerScissorImage = document.getElementById("computer-scissor-image");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const resetBtn = document.getElementById("reset-btn");

function initializeGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreElement.textContent = 0;
  computerScoreElement.textContent = 0;

  playerRockImage.classList.remove('active');
  playerPaperImage.classList.remove('active');
  playerScissorImage.classList.remove('active');

  computerRockImage.classList.remove('active');
  computerPaperImage.classList.remove('active');
  computerScissorImage.classList.remove('active');
};


// Randomly return an enum value
function computerPlay() {
  var keys = Object.keys(Values);
  let val = Values[keys[keys.length * Math.random() << 0]];
  toggleDisplay(val, 'computer');
  return val;
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

function toggleDisplay(selection, display) {
  if (display == "player") {
    switch (selection) {
      case Values.ROCK:
        playerRockImage.classList.add('active')
        playerScissorImage.classList.remove('active')
        playerPaperImage.classList.remove('active')
        break;
      case Values.PAPER:
        playerRockImage.classList.remove('active')
        playerScissorImage.classList.remove('active')
        playerPaperImage.classList.add('active')
        break;
      case Values.SCISSOR:
        playerRockImage.classList.remove('active')
        playerScissorImage.classList.add('active')
        playerPaperImage.classList.remove('active')
        break;
    }
  } else {
    switch (selection) {
      case Values.ROCK:
        computerRockImage.classList.add('active')
        computerScissorImage.classList.remove('active')
        computerPaperImage.classList.remove('active')
        break;
      case Values.PAPER:
        computerRockImage.classList.remove('active')
        computerScissorImage.classList.remove('active')
        computerPaperImage.classList.add('active')
        break;
      case Values.SCISSOR:
        computerRockImage.classList.remove('active')
        computerScissorImage.classList.add('active')
        computerPaperImage.classList.remove('active')
        break;
    }

  }
}

function refreshScore(winner) {
  if (winner == 'player') {
    playerScore++;
  }
  if (winner == 'computer') {
    computerScore++;
  }

  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Main game loop 
function game() {
  rockBtn.addEventListener('click', () => {
    let winner = playRound(Values.ROCK, computerPlay());
    refreshScore(winner);
    toggleDisplay(Values.ROCK, 'player');
  })
  paperBtn.addEventListener('click', () => {
    let winner = playRound(Values.PAPER, computerPlay());
    refreshScore(winner);
    toggleDisplay(Values.PAPER, 'player');
  })
  scissorBtn.addEventListener('click', () => {
    let winner = playRound(Values.SCISSOR, computerPlay());
    refreshScore(winner);
    toggleDisplay(Values.SCISSOR, 'player');
  })
  resetBtn.addEventListener('click', () => {
    initializeGame();
  })

}

initializeGame();
game();
