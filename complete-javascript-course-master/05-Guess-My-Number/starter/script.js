'use strict';

/*
// PROJECT #1: Guess My NUmber!

console.log(document.querySelector('.message').textContent);


// What's the DOM and DOM Manipulation

// Selecting and Manipulating Elements

document.querySelector('.message').textContent = '🎉Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// Handling Click Events
// Implementing the Game Logic

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = randomNumber();
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const backGroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const numberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    displayNumber(secretNumber);
    backGroundColor('#60b347');
    numberWidth('30rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('🧨 You lost the game!');
      displayScore(0);
    }
  }
  // When guess is to high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🧨 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //     // When guess is to low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '🧨 You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = randomNumber();

  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  backGroundColor('#222');
  numberWidth('15rem');
  //document.querySelector('.number').textContent = secretNumber;
});
