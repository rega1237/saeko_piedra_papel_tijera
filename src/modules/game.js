import { resultGame } from './getResult.js';
import { choices } from './data.js';
import { showPicks, updateScore, showResult } from './showResults.js';

const addUsrChoice = (choice) => {
  choices[0] = choice;
};

const addCompChoice = (choice) => {
  choices[1] = choice;
};

const choiceSelector = () => {
  const userChoice = document.querySelectorAll('.user-choice');
  const options = document.querySelector('.options');
  let userGame = '';
  const computerOptions = ['piedra', 'papel', 'tijera'];

  userChoice.forEach((choice) => {
    choice.addEventListener('click', () => {
      userGame = choice.alt;
      addUsrChoice(userGame);

      const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
      addCompChoice(computerChoice);

      options.classList.add('non-clickable');
      resultGame();
      showPicks();
      updateScore();
      showResult();
    });
  });
};

export default choiceSelector;
