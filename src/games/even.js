import { generateRandomNumber } from '..';

export const quest = 'Answer "yes" if number even otherwise answer "no".';

export const generateQA = () => {
  const randomNumber = generateRandomNumber(1000);
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [`${randomNumber}`, correctAnswer];
};
