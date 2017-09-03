import { startGame } from '..';
import generateRandomInt from './randomNumberGenerator';

const quest = 'What is the result of the expression?';

const calculate = (a, sign, b) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Error: calc.js > calculate: wrong sign!');
  }
};

const generateQuestion = () => {
  const rand1 = generateRandomInt(0, 100);
  const rand2 = generateRandomInt(0, 100);
  const sign = ['+', '-', '*'][generateRandomInt(0, 2)];
  const question = `${rand1} ${sign} ${rand2}`;
  return question;
};

const generateAnswer = (question) => {
  const [a, sign, b] = question.split(' ');
  const answer = calculate(Number(a), sign, Number(b)).toString();
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
