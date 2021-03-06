import { startGame } from '..';
import generateRandomInt from './randomNumberGenerator';

const quest = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestion = () => {
  const question = String(generateRandomInt(1, 1000));
  return question;
};

const generateAnswer = (question) => {
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return answer;
};

const generateQA = () => {
  const question = generateQuestion();
  const answer = generateAnswer(question);
  return [question, answer];
};

export default () => {
  startGame(quest, generateQA);
};
