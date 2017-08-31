import { startGame } from '..';
import generateRandomNumber from './utils';

const quest = 'Answer "yes" if number even otherwise answer "no".';

const generateQA = () => {
  const randomNumber = generateRandomNumber(1000) + 1;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [`${randomNumber}`, correctAnswer];
};

export default () => {
  startGame(quest, generateQA);
};
