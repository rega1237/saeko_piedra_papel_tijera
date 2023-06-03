import { result } from './getResult.js';
import { choices, score } from './data.js';

export const showPicks = () => {
  const [userPick, computerPick] = [...choices];
  const userChoiceElement = document.querySelector(`.user-${userPick}`);
  const computerChoiceElement = document.querySelector(`.comp-${computerPick}`);

  userChoiceElement.classList.remove('hiden');
  computerChoiceElement.classList.remove('hiden');

  setTimeout(() => {
    userChoiceElement.classList.add('hiden');
    computerChoiceElement.classList.add('hiden');
  }, 3000);
};

export const updateScore = () => {
  const [userScoreText, computerScoreText] = [...score];
  const userScore = document.getElementById('user-score');
  const computerScore = document.getElementById('computer-score');

  setTimeout(() => {
    userScore.textContent = userScoreText;
    computerScore.textContent = computerScoreText;
  }, 3000);
};

export const showResult = () => {
  const verticalLine = document.querySelector('.vertical-line');
  const resultElement = document.querySelector('.result');
  const options = document.querySelector('.options');

  setTimeout(() => {
    verticalLine.classList.add('hiden');
    resultElement.classList.remove('hiden');
    resultElement.innerHTML = `
      <h2>${result.resultGame}</h2>
    `;
    setTimeout(() => {
      verticalLine.classList.remove('hiden');
      resultElement.classList.add('hiden');
      options.classList.remove('non-clickable');
    }, 3000);
  }, 3000);
};
