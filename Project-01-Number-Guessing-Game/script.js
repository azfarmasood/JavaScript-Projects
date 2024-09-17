"use strict";

// document.querySelector(".h1").textContent = "Welcome To Number Guessing Game!";
// document.querySelector(".check").addEventListener(".click", function () {
//   console.log(document.querySelector(".guess").value);
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
}

const winAndLostGame = (message) => {
  document.querySelector(".winner").textContent = message;
}


document.querySelector(".check").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  if (!guessNumber) {
    displayMessage('Please add a number!')
  } 
  else if (guessNumber > 20) {
    displayMessage('Number must be between 1 and 20!')
  }
  else if (guessNumber !== secretNumber) {
    displayMessage(guessNumber > secretNumber ? "Too high!" : "Too Low!");
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } 
    else {
      document.querySelector(".number").textContent = secretNumber;
      displayMessage('Game Over!')
      winAndLostGame('You Lost The Game!')
      document.querySelector(
        ".lose"
      ).textContent = `The Correct Number Was ${secretNumber}`;
      document.querySelector(".winner").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
  else if (guessNumber === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('.number').style.backgroundColor = "green";
    document.querySelector('.number').style.color = 'white';
    displayMessage('You Found The Correct Number!');
    winAndLostGame('You Win The Game!');
    document.querySelector(".winner").style.backgroundColor = "green";
    if(score > heighScore) {
      heighScore = score;
      document.querySelector('.highscore').textContent = heighScore;
    }
  } 

});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  heighScore = 0;
  displayMessage('Start guessing...');
  document.querySelector(".score").textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.backgroundColor = 'white';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = heighScore;
})