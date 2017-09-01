import { startGame } from '..';
import generateRandomNumber from './generateRandomNumber';

const quest = 'What is the result of the expression?';

const generateQuestion = () => {
  const rand1 = generateRandomNumber(100);
  const rand2 = generateRandomNumber(100);
  const sign = ['+', '-', '*'][generateRandomNumber(3)];
  const question = `${rand1} ${sign} ${rand2}`;
  return question;
};

const generateAnswer = (question) => {
  const [rand1, sign, rand2] = question.split(' ');
  let answer;
  switch (sign) {
    case '+':
      answer = String(Number(rand1) + Number(rand2));
      break;
    case '-':
      answer = String(rand1 - rand2);
      break;
    case '*':
      answer = String(rand1 * rand2);
      break;
    default:
      throw new Error('Error: generateAnswer is broken!');
  }
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
