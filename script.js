'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
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
  if (!guess) {
    displayMessage('No Number 😒');

    // Winning Condition
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 🎉');

    styling(secretNumber, '#60b347', '30rem');

    if (score > highscore) {
      highscore = score;
      console.log();
      document.querySelector('.highscore').textContent = highscore;
    }
    //loosing Condition
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High 📈' : 'Too Low 📉');
      score--;
      setScore(score);
    } else {
      displayMessage('You Loss 💥');
      setScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  setScore(score);
  displayMessage('Start Guessing...');
  styling('?', '#222', '15rem');
  document.querySelector('.guess').value = '';
});
