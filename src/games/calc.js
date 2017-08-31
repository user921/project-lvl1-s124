import { startGame } from '..';
import generateRandomNumber from './utils';

const quest = 'What is the result of the expression?';

const generateQA = () => {
  const rand1 = generateRandomNumber(100);
  const rand2 = generateRandomNumber(100);
  const sign = ['+', '-', '*'][generateRandomNumber(3)];
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = rand1 + rand2;
      break;
    case '-':
      correctAnswer = rand1 - rand2;
      break;
    case '*':
      correctAnswer = rand1 * rand2;
      break;
    default:
      break;
  }
  return [`${rand1} ${sign} ${rand2}`, `${correctAnswer}`];
};

export default () => {
  startGame(quest, generateQA);
};
