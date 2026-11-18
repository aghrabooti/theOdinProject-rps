/*computer chooses randomly between the options */
function getComputerChoice() {
  let randomNumber = parseInt(Math.random() * 10);
  let computerChoice;

  if (randomNumber % 3 == 0) {
    computerChoice = "rock";
  }

  else if (randomNumber % 3 == 1) {
    computerChoice = "paper";
  }

  else if (randomNumber % 3 == 2) {
    computerChoice = "scissors";
  }
  return computerChoice;
}

/*user chooses an option */
function getHumanChoice() {
  let userChoice = parseInt(prompt("Please enter your choice:\n1. rock\n2.paper\n3.scissors\n"))

  if (userChoice == 1) {
    return userChoice = "rock";
  }

  else if (userChoice == 2) {
    return userChoice = "paper";
  }

  else if (userChoice == 3) {
    return userChoice = "scissors";
  }
}

/*gets the user choice and assings computer's choice and compare them */
function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  // draw
  if (humanChoice == computerChoice) {
    console.log(`Your Choice: ${humanChoice}
Computer Choice: ${computerChoice}
It's a Draw`);
    roundResult = "draw";
  }

  else {

    //rock
    if (humanChoice == "rock") {
      // win
      if (computerChoice == "paper") {
        console.log(`Your Choice: ${humanChoice}
Computer Choice: ${computerChoice}
YOU WIN!`);
        humanScore++;
        roundResult = "win";
      }
      //lose
      else {
        console.log(`Your Choice: ${humanChoice}
Computer Choice: ${computerChoice}
YOU Lose!`);
        computerScore++;
        roundResult = "lose";
      }
    }

    //paper
    else if (humanChoice == "paper") {
      // win
      if (computerChoice == "rock") {
        console.log(`Your Choice: ${humanChoice}
Computer Choice: ${computerChoice}
YOU WIN!`);
        humanScore++;
        roundResult = "win";
      }
      //lose
      else {
        console.log(`Your Choice: ${humanChoice}
Computer Choice: ${computerChoice}
YOU Lose!`);
        computerScore++;
        roundResult = "lose";
      }
    }

    //scissors
    else if (humanChoice == "scissors") {
      // win
      if (computerChoice == "paper") {
        console.log(`Your Choice: ${humanChoice}
Computer Choice: ${computerChoice}
YOU WIN!`);
        humanScore++;
        roundResult = "win";
      }
      //lose
      else {
        console.log(`Your Choice: ${humanChoice}
Computer Choice: ${computerChoice}
YOU Lose!`);
        computerScore++;
        roundResult = "lose";
      }
    }
  }
}

/*runs the game for five rounds with a winner */
function playGame(){
  let roundCounter = 0;
  while(roundCounter < 5){
    playRound();
    /*check if the round has a winner or not */
    if(roundResult != "draw")
      roundCounter++;
    /* show result */
    console.log(`Results:\nYou: ${humanScore}\nComputer:${computerScore}`);
  }
  /* show final result */
  if (computerScore > humanScore) {
    console.log("You Lost the game!");
  }
  else {
    console.log("Congratulations! You Win!");
  }
}

/*======================================== */
/*global*/
let humanScore = 0;
let computerScore = 0;
let roundResult;

playGame();
