import { startGame } from '..';
import generateRandomInt from './randomNumberGenerator';

const quest = 'What number is missing in this progression?';

const progressionLength = 10;
const hiddenNumberIndex = Math.floor(progressionLength / 2);

const createProgression = (first, delta, length) => {
  if (length === 0) {
    return [];
  }
  return [first].concat(createProgression(first + delta, delta, length - 1));
};

const computeDelta = (arr) => {
  const [i1, i2] = arr.reduce((acc, element, i) => {
    if (acc.length === 2 || isNaN(element)) {
      return acc;
    }
    return acc.concat(i);
  }, []);
  const delta = (arr[i2] - arr[i1]) / (i2 - i1);
  return delta;
};

const computeProgressionMember = (index, arr, delta) => {
  if (arr[index - 1] !== undefined) {
    return arr[index - 1] + delta;
  }
  return arr[index + 1] - delta;
};

const generateQuestion = () => {
  const first = generateRandomInt(1, 30);
  const delta = generateRandomInt(1, 20);
  const arr = createProgression(first, delta, progressionLength);
  const question = arr.map((num, i) => (i === hiddenNumberIndex ? '..' : `${num}`)).join(' ');
  return question;
};

const generateAnswer = (question) => {
  const arr = question.split(' ').map(Number);
  const delta = computeDelta(arr);
  const answer = computeProgressionMember(hiddenNumberIndex, arr, delta).toString();
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
