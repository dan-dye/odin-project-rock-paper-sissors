const buttons = document.querySelectorAll('button');
const resultMessage = document.getElementById('resultMessage');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;


updateScore();

buttons.forEach(button => button.addEventListener('click', function(e){
  playRound(this.textContent, computerPlay());
}))

//Provides a random rock, paper, scissors choice from the computer.
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}


//Play function to start a game. 
function playRound(playerSelection, computerSelection) {
  let winConditions = [["Rock", "Scissors"], ["Scissors", "Paper"], ["Paper", "Rock"]];
  // Draw Check
  if (playerSelection === computerSelection) {
    resultMessage.textContent = `Draw! We both picked ${playerSelection}.`;
    return;
  }
  else {
    //Checks if playerSelection and computerSelection are present in wins. 
    for (i = 0; i < winConditions.length; i++) {
      if (winConditions[i][0] === playerSelection && winConditions[i][1] === computerSelection)  {
        resultMessage.textContent = `You win! Your ${playerSelection} beats my ${computerSelection}.`;
        playerScore = playerScore + 1;
        updateAndCheckWin();
        return;
      }
    }

    //Defaults to defeat if draw or victory conditions are not satisfied.
    resultMessage.textContent = `You lose! My ${computerSelection} beats your ${playerSelection}.`;
    computerScore = computerScore + 1;
    updateAndCheckWin();
  }
}

function updateScore() {
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function checkForWin() {
  if(playerScore >= 5) {
    resultMessage.textContent = resultMessage.textContent + " You've got five wins. You win the game!"
  }
  else if(computerScore >= 5) {
    resultMessage.textContent = resultMessage.textContent + " I've got five wins. I win the game!"
  }
}

function updateAndCheckWin() {
  updateScore();
  checkForWin();
}
