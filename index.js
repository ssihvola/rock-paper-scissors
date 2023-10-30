function getComputerChoice() {
  let randomInteger = Math.floor(Math.random() * 3)

  if (randomInteger === 0) {
    return 'rock'
  } else if (randomInteger === 1) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase()
  const winningCombos = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  }
  
  if (winningCombos[player] === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`
  } else if (winningCombos[computerSelection] === player) {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  } else {
    return 'Tie!'
  }
}

function game() {
  for (let step = 0; step < 5; step++) {
    const playerSelection = prompt("rock, paper or scissors?")
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
  }
}

game()