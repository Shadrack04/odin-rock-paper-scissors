const optionButtons = document.querySelectorAll('.btn');
const humanScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const message = document.querySelector('.message p');

const choices = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;


// const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


optionButtons.forEach(btn => {
  btn.addEventListener('click', (e)=> {
    const selected = e.target.textContent.toLowerCase();
    playRound(selected, computerSelection);
    
  })
})




function playRound(humanChoice, computerChoice) {
  let output = '';
  switch (humanChoice) {
    case 'rock':
        switch (computerChoice) {
          case 'rock':
              output = "It's a tie";
              updateScore();
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;

          case 'paper':
              output = `You lose! Paper beats Rock`;
              computerScore++;
              updateScore();
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          case 'scissor':
              output = 'You Win! Rock beats Scissor';
              humanScore++;
              updateScore();
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          
          default:
            break;
        }
      break;

      case 'paper':
        switch (computerChoice) {
          case 'rock':
              output = "You Win! Paper beats Rock";
              humanScore++;
              updateScore();
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;

          case 'paper':
              output = "It's a tie";
              updateScore();
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          case 'scissor':
              output = 'You Lose! Scissor beats Paper';
              computerScore++;
              updateScore();
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);

            break;
          
          default:
            break;
        }
      break;

      case 'scissor':
        switch (computerChoice) {
          case 'rock':
              output = "You Lose! Rock beats Scissor";
              computerScore++;
              updateScore();
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;

          case 'paper':
              output = 'You Win! Scissor beats Paper';
              humanScore++;
              updateScore();
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          case 'scissor':
              output = "It's a tie";
              updateScore();
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          
          default:
            break;
        }
      break;
  
    default:
      break;
  }
  message.textContent = output;
}

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomNum];
  
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = prompt('choice your option');
  return humanChoice.toLowerCase();
}

function updateScore() {
  humanScoreEl.textContent = humanScore;
  computerScoreEl.textContent = computerScore;
}