import { startGame } from '..';
import generateRandomInt from './randomNumberGenerator';

const quest = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  const iter = (i) => {
    if (i === 1) {
      return true;
    }
    if (num % i === 0) {
      return false;
    }
    return iter(i - 1);
  };
  return iter(Math.floor(num / 2));
};

const generateQuestion = () => {
  const question = String(generateRandomInt(2, 30));
  return question;
};

const generateAnswer = (question) => {
  const answer = isPrime(Number(question)) ? 'yes' : 'no';
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
