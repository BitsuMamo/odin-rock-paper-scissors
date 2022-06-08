// Enum Values
const Values = {
  ROCK: "rock",
  PAPER: "paper",
  SCISSOR: "scissor",
}

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

function initializeElements() {
  playerScoreElement.textContent = 0;
  computerScoreElement.textContent = 0;

  playerRockImage.classList.remove('active');
  playerPaperImage.classList.remove('active');
  playerScissorImage.classList.remove('active');

  computerRockImage.classList.remove('active');
  computerPaperImage.classList.remove('active');
  computerScissorImage.classList.remove('active');
}


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

// Converts input into enum value
function playerInputConvert(input) {
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

function toggleDisplay(selection, display){
  if(display == "player"){
    switch(selection){
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
  }else{
    switch(selection){
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

function refreshScore(playerScore, computerScore){
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Main game loop 
function game() {
  let playerScore = 3;
  let computerScore = 1;
  let gamesPlayed = 0;


  /* while (gamesPlayed < 5) {
    let input = prompt("R: rock, P: paper, S: scissor");

    const playerSelection = playerInputConvert(input);
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
    alert(`The winner is the player with a score of ${playerScore}:${computerScore}!`);
  } else if (computerScore > playerScore) {
    console.log(`The winner is the computer with a score of ${computerScore}:${playerScore}!`);
    alert(`The winner is the computer with a score of ${computerScore}:${playerScore}!`);
  } else {
    console.log("It's a tie!");
    alert("It's a tie!");
  } */

  rockBtn.addEventListener('click', () => {
    status = playRound(Values.ROCK, computerPlay());
    toggleDisplay(Values.ROCK, 'player');
  })
  paperBtn.addEventListener('click', () => {
    status = playRound(Values.PAPER, computerPlay());
    toggleDisplay(Values.PAPER, 'player');
  })
  scissorBtn.addEventListener('click', () => {
    status = playRound(Values.SCISSOR, computerPlay());
    toggleDisplay(Values.SCISSOR, 'player');
  })

  refreshScore(playerScore, computerScore);
}


initializeElements();
game();
