//create a simple implementation of grade school classic rock paper scissors.

let computerScore = 0
let playerScore = 0
let options = ['rock', 'paper', 'scissors']

//create a function that will randomly select a choice from the array

function computerChoice() {
  let x = options[Math.floor(Math.random() * options.length)]
  console.log(x)
  return x
}

//create a variable to player choices
//create a function that will compare the player and computer choices and return a string

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('tie')
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore++
      console.log('you won')
    } else if (computerSelection === 'scissors') {
      computerScore++
      console.log('the computer won')
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      playerScore++
      console.log('you won')
    } else if (computerSelection === 'rock') {
      computerScore++
      console.log('the computer won')
    }
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      playerScore++
      console.log('you won')
    } else if (computerSelection === 'paper') {
      computerScore++
      console.log('the computer won')
    }
  }
}

//has two parameters, player and computer
//create a function that will run the game and return a string
//has one parameter, rounds
function game(x) {
  for (let i = 1; i <= x; i++) {
    console.log(`${i} ${x}`)
    let playerSelection = prompt('input weapon').toLowerCase()

    let computerSelection = computerChoice()
    playRound(playerSelection, computerSelection)
    alert(`player score:${playerScore} || computer score:${computerScore}
    `)
  }
}

// ask player how many round he or she want
// game(5)
let x = Number(prompt('how many rounds do you want to play?'))
// game(x)
game(x)
