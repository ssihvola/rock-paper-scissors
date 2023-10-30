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

function getPlayerChoice() {
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
  let lowerCasedPlayerSelection = playerSelection.toLowerCase()

  if (lowerCasedPlayerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock beats scissors.'
  } else if (lowerCasedPlayerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper beats rock.'
  } else if (lowerCasedPlayerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats rock.'
  } else if (lowerCasedPlayerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors beat paper.'
  } else if (lowerCasedPlayerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors beat paper.'
  } else if (lowerCasedPlayerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lose! Rock beats scissors.'
  } else {
    return 'Tie!'
  }
}

const playerSelection = getPlayerChoice()
const computerSelection = getComputerChoice()

console.log(playerSelection)
console.log(computerSelection)

console.log(playRound(playerSelection, computerSelection))