const choices = ['rock', 'paper', 'scissor'];
let humanScore = 0;
let computerScore = 0;


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice);
  switch (humanChoice) {
    case 'rock':
        switch (computerChoice) {
          case 'rock':
              console.log("It's a tie");
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;

          case 'paper':
              console.log(`You lose! Paper beats Rock`);
              computerScore++;
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          case 'scissor':
              console.log('You Win! Rock beats Scissor');
              humanScore++;
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          
          default:
            break;
        }
      break;

      case 'paper':
        switch (computerChoice) {
          case 'rock':
              console.log("You Win! Paper beats Rock");
              humanScore++;
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;

          case 'paper':
              console.log("It's a tie");
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          case 'scissor':
              console.log('You Lose! Scissor beats Paper');
              computerScore++;
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);

            break;
          
          default:
            break;
        }
      break;

      case 'scissor':
        switch (computerChoice) {
          case 'rock':
              console.log("You Lose! Rock beats Scissor");
              computerScore++;
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;

          case 'paper':
              console.log('You Win! Scissor beats Paper');
              humanScore++;
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          case 'scissor':
              console.log("It's a tie");
              console.log(`You: ${humanScore} - Computer: ${computerScore}`);
            break;
          
          default:
            break;
        }
      break;
  
    default:
      break;
  }
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

