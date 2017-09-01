import { startGame } from '..';
import generateRandomNumber from './utils';

const quest = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const result = (b === 0) ? Math.abs(a) : gcd(b, a % b);
  return result;
};

const generateQuestion = () => {
  const rand1 = generateRandomNumber(30) + 1;
  const rand2 = generateRandomNumber(30) + 1;
  const question = `${rand1} ${rand2}`;
  return question;
};

const generateAnswer = (question) => {
  const [rand1, rand2] = question.split(' ').map(Number);
  const answer = gcd(rand1, rand2).toString();
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
