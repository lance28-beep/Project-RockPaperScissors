//create a simple implementation of grade school classic rock paper scissors.

let computerScore = document.querySelector('#computerScore')
let playerScore = document.querySelector('#playerScore')
let [youScore, comScore, round] = [0, 0, 0]
const computer_Rock = document.querySelector('#computer_Rock')
const computer_Paper = document.querySelector('#computer_Paper')
const computer_Scissors = document.querySelector('#computer_Scissors')
const you_Rock = document.querySelector('#you_Rock')
const you_Scissors = document.querySelector('#you_Scissors')
const you_Paper = document.querySelector('#you_Paper')

const modal = document.querySelector('.modal')
const modalComputer = document.querySelector('.result #computer')
const modalPlayer = document.querySelector('.result #player')
const modalLabel = document.querySelector('.modal-message h1')
const modalButton = document.querySelector('#play-again')

//computer label
const h1 = document.querySelector('.contaier-label h1')
const p = document.querySelector('.contaier-label p')

let options = ['rock', 'paper', 'scissor']

//create a function that will randomly select a choice from the array
function computerChoice() {
  let x = options[Math.floor(Math.random() * options.length)]
  document.getElementById('computerChoice').src = `images/${x}.png`
  document.getElementById('computerChoice').className = `${
    x === 'paper' ? 'rotate' : 'flip'
  }`
  document.querySelector('#computerBid p').innerHTML = `${x}`
  return x
}
you_Paper.addEventListener('click', function () {
  round++
  console.log(round)
  playRound('paper', computerChoice())
  playerScore.innerHTML = youScore
  computerScore.innerHTML = comScore
  document.getElementById('yourChoice').src = 'images/paper.png'
  document.getElementById('yourChoice').className = 'flip'
  document.querySelector('#yourBid p').innerHTML = 'PAPER'
})
you_Rock.addEventListener('click', function () {
  round++
  console.log(round)
  playRound('rock', computerChoice())
  playerScore.innerHTML = youScore
  computerScore.innerHTML = comScore
  document.getElementById('yourChoice').src = 'images/rock.png'
  document.getElementById('yourChoice').className = 'rotate'
  document.querySelector('#yourBid p').innerHTML = 'ROCK'
})
you_Scissor.addEventListener('click', function () {
  round++
  console.log(round)
  playRound('scissor', computerChoice())
  playerScore.innerHTML = youScore
  computerScore.innerHTML = comScore
  document.getElementById('yourChoice').src = 'images/scissor.png'
  document.getElementById('yourChoice').className = 'rotate'
  document.querySelector('#yourBid p').innerHTML = 'SCISSOR'
})
//create a variable to player choices
//create a function that will compare the player and computer choices and return a string
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log('tie')
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      youScore++
      console.log('you won')
      h1.innerText = 'you won'
    } else if (computerSelection === 'scissor') {
      comScore++
      console.log('the computer won')
      h1.innerText = 'the computer won'
    }
  } else if (playerSelection === 'scissor') {
    if (computerSelection === 'paper') {
      youScore++
      console.log('you won')
      h1.innerText = 'you won'
    } else if (computerSelection === 'rock') {
      comScore++
      console.log('the computer won')
      h1.innerText = 'the computer won'
    }
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissor') {
      youScore++
      console.log('you won')
      h1.innerText = 'you won'
    } else if (computerSelection === 'paper') {
      comScore++
      console.log('the computer won')
      h1.innerText = 'the computer won'
    }
  }
  if (playerSelection === computerSelection) {
    h1.innerText = 'TIE'
    p.innerText = 'tie'
  } else {
    p.textContent = ` ${playerSelection} VS.${computerSelection}`
  }
  //if one of the player wins 5 rounds, the game will end
  if (youScore === 5 || comScore === 5) {
    modal.style.display = 'block'
    modalLabel.innerText = `${
      youScore > comScore ? 'you won' : 'the computer won'
    }`
    modalComputer.innerText = `${comScore}`
    modalPlayer.innerText = `${youScore}`
  }
}

//create a function that will reset the game
function resetGame() {
  youScore = 0
  comScore = 0
  round = 0
  modal.style.display = 'none'
  playerScore.innerHTML = youScore
  computerScore.innerHTML = comScore
}

modalButton.addEventListener('click', resetGame)
