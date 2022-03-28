function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}