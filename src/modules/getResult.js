import { choices, score } from './data.js';

export const result = {
  resultGame: '',
};

export const resultGame = () => {
  if (choices[0] === 'piedra' && choices[1] === 'papel') {
    result.resultGame = 'Perdiste';
    score[1] += 1;
  } else if (choices[0] === 'piedra' && choices[1] === 'tijera') {
    result.resultGame = 'Ganaste';
    score[0] += 1;
  } else if (choices[0] === 'papel' && choices[1] === 'piedra') {
    result.resultGame = 'Ganaste';
    score[0] += 1;
  } else if (choices[0] === 'papel' && choices[1] === 'tijera') {
    result.resultGame = 'Perdiste';
    score[1] += 1;
  } else if (choices[0] === 'tijera' && choices[1] === 'piedra') {
    result.resultGame = 'Perdiste';
    score[1] += 1;
  } else if (choices[0] === 'tijera' && choices[1] === 'papel') {
    result.resultGame = 'Ganaste';
    score[0] += 1;
  } else {
    result.resultGame = 'Empate';
  }
};
