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
    console.log(`Draw! You both picked ${playerSelection}`)
  }
  //Array of win conditions.
  let wins = [["Rock", "Scissors"], ["Scissors", "Paper"], ["Paper", "Rock"]];
  //Checks if playerSelection and computerSelection are present in wins. 
  for (i = 0; i < wins.length; i++) {
    //If matching values are present in wins array, returns victory message.
    if (wins[i][0] === playerSelection && wins[i][1] === computerSelection)  {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      return 0;
    }
  }
  //Defaults to defeat message if draw or victory conditions are not satisfied.
  console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  return 1;
}

//Returns string with first letter capitalized.
function camelCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

//Starts Rock, Paper, Scissors game with five rounds.
function game() {
  //Initializes score at zero. [Player, computer]
  let score = [0, 0];
  //Begin loop of five rounds.
  for (let i = 0; i < 5; i++) {
    console.log("Round", i);
    console.log(playRound(playerInput(), computerPlay()));
  }
  console.log("Game Over")
}

//Collect player choice of rock, paper, scissors.
function playerInput() {
  let choice = camelCase(prompt("Choose Rock, Paper, or Scissors:"));
  //Check for invalid inputs.
  if(["Rock", "Paper", "Scissors"].includes(choice) === false) {
    console.log("Invalid input. Please enter Rock, Paper, or Scissors...");
    return playerInput();
  }
  return choice;
}

//Add one to the score for winner.
function processWinner(scoreArray, roundResult) {
  roundResult ? scoreArray[roundResult] = scoreArray[roundResult] + 1 : '';
}