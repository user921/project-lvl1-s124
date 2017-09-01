import { startGame } from '..';
import generateRandomNumber from './generateRandomNumber';

const quest = 'What number is missing in this progression?';

const createProgression = (first, delta, length) => {
  if (length === 0) {
    return [];
  }
  return [first].concat(createProgression(first + delta, delta, length - 1));
};

const progressionLength = 10; // must be bigger than 3
const hiddenNumberIndex = Math.floor(progressionLength / 2);

const generateQuestion = () => {
  const first = generateRandomNumber(100) + 1;
  const delta = generateRandomNumber(100) + 1;
  const arr = createProgression(first, delta, progressionLength);
  const question = arr.map((num, i) => (i === hiddenNumberIndex ? '..' : `${num}`)).join(' ');
  return question;
};

const generateAnswer = (question) => {
  const arr = question.split(' ');
  const answer = String(arr[hiddenNumberIndex + 1] - (arr[1] - arr[0]));
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
