let MAX_RANGE = 2.5;
let GAMES_TOTAL = 0;
let TOTAL_PRIZE = 0;
let MAX_PRIZE = 10;

function randomInteger(min = 0, max = MAX_RANGE) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function askUser(attempts, possible) {
  return parseInt(prompt(`
  Please enter a number between 0 and ${MAX_RANGE}
  Attempts left: ${attempts}
  Total prize: ${TOTAL_PRIZE}
  Possible prize on current atempt: ${possible}`, ''));
}

function warning(num, attempts) {
  if (isNaN(num)) {
    return alert(`Please enter number! You have ${attempts} attempts left.`);
  }
}

function endGame(prize, proceed = false) {
  if (proceed) {
    TOTAL_PRIZE = parseInt(TOTAL_PRIZE + prize);
    MAX_PRIZE = parseInt(MAX_PRIZE * 3);
    return confirm(`Congratulation! Your prize is ${prize}$. Do You want to continue?`);
  }
  return alert(`Thank you for a game. Your prize is: ${prize}`);
}

function runTheGame() {
  GAMES_TOTAL = GAMES_TOTAL + 1;
  MAX_RANGE = parseInt(MAX_RANGE * 2);
  let prize = 0;
  let attempts = 3;
  const rand = randomInteger();
  let number = askUser(attempts, MAX_PRIZE);
  if (number === rand) {
    prize = MAX_PRIZE;
    restart(endGame(prize, true));
  } else {
    attempts--;
    warning(number, attempts);
    number = askUser(attempts, Math.floor(MAX_PRIZE * 0.5));
    if (number === rand) {
      prize = Math.floor(MAX_PRIZE * 0.5);
      restart(endGame(prize, true));
    } else {
      attempts--;
      warning(number, attempts);
      number = askUser(attempts, Math.floor(MAX_PRIZE * 0.25));
      if (number === rand) {
        prize = Math.floor(MAX_PRIZE * 0.25);
        restart(endGame(prize, true));
      } else {
        endGame(prize);
      }
    }
  }
}

function restart(runAgain) {
  if (runAgain) {
    runTheGame();
  }
}

let playAGame = confirm('Do you want to play a game?');

if (playAGame === false) {
  alert('You did not become a millionaire, but can.');
} else {
  runTheGame();
}



