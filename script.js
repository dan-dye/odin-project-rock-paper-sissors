const buttons = document.querySelectorAll('button');
const resultMessage = document.getElementById('resultMessage');

resultMessage.style.color = 'red';

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
  playerSelection = camelCase(playerSelection);
  //Checks for same answer and returns draw response if true.
  if (playerSelection === computerSelection) {
    console.log(`Draw! We both picked ${playerSelection}`)
    return undefined;
  }
  //Array of win conditions.
  let wins = [["Rock", "Scissors"], ["Scissors", "Paper"], ["Paper", "Rock"]];
  //Checks if playerSelection and computerSelection are present in wins. 
  for (i = 0; i < wins.length; i++) {
    //If matching values are present in wins array, returns victory message.
    if (wins[i][0] === playerSelection && wins[i][1] === computerSelection)  {
      console.log(`You win! Your ${playerSelection} beats my ${computerSelection}`);
      return 1;
    }
  }
  //Defaults to defeat message if draw or victory conditions are not satisfied.
  console.log(`You lose! My ${computerSelection} beats your ${playerSelection}`);
  return 2;
}

//Returns string with first letter capitalized.
function camelCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

//Starts Rock, Paper, Scissors game with five rounds.
function game() {
  // //Initializes score at zero. [undefined, Player, Computer]
  // let score = [undefined, 0, 0];
  // let currentWinner = "Draw";
  // //Begin loop of five rounds.
  // for (let i = 0; i < 5; i++) {
  //   console.log("Round", i);
  //   //Play round and update score with the result.
  //   score = processWinner(score, playRound(playerInput(), computerPlay()));
  //   console.log(`Score: Player ${score[1]} vs Computer ${score[2]}`);
  //   //Update current winner with score change.
  //   if (score[1] > score[2]) {
  //     currentWinner = "Player";
  //   }
  //   else if(score[1] < score[2]) {
  //     currentWinner = "Computer";
  //   }
  //   else {
  //     currentWinner = "Draw";
  //   }
  // }
  // //Declare winner.
  // if (currentWinner != "Draw") {
  //   console.log(`Game Over. The ${currentWinner} wins!`)
  // }
  // else {
  //   console.log("Game Over. It's a draw!");
  // }

}

// //Collect player choice of rock, paper, scissors.
// function playerInput() {
//   let choice = camelCase(prompt("Choose Rock, Paper, or Scissors:"));
//   //Check for invalid inputs.
//   if(["Rock", "Paper", "Scissors"].includes(choice) === false) {
//     console.log("Invalid input. Please enter Rock, Paper, or Scissors...");
//     return playerInput();
//   }
//   return choice;
// }

//Add one to the score for winner.
function processWinner(scoreArray, roundResult) {
  //If result is not a draw, add one to players score in array.
  roundResult ? scoreArray[roundResult] = scoreArray[roundResult] + 1 : '';
  return scoreArray;
}