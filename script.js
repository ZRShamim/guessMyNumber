'use strict';

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 10;
let highscore = 0;

const displayMessage = (message, image) => {
  document.querySelector('.message').textContent = message;
  document.querySelector('.image').src = image;
};

const setScore = number => {
  document.querySelector('.score').textContent = number;
};

const styling = (number, color, width) => {
  document.querySelector('.number').textContent = number;
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input
  if (!guess || guess < 0 || guess > 30) {
    displayMessage('Guess Number Between (1-30)😒', 'image/guess.gif');
  }
  // Winning Condition
  else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉', 'image/congo.gif');

    styling(secretNumber, '#60b347', '30rem');

    if (score > highscore) {
      highscore = score;
      console.log();
      document.querySelector('.highscore').textContent = highscore;
    }
    //loosing Condition
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
      if (guess > secretNumber) {
        displayMessage('Too High 📈', 'image/high.gif');
      } else {
        displayMessage('Too Low 📉', 'image/low.gif');
      }
      score--;
      setScore(score);
    } else {
      displayMessage('You Loss 💥', 'image/loss.gif');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  setScore(score);
  displayMessage('Start Guessing...', 'image/guess.gif');
  styling('?', '#222', '15rem');
  document.querySelector('.guess').value = '';
});
