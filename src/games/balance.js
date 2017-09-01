import { startGame } from '..';
import generateRandomNumber from './generateRandomNumber';

const quest = 'Balance the given number.';

const createArrayOfNumbers = (num, length) => {
  const result = new Array(length + 1).join(num).split('').map(Number);
  return result;
};

const sumOfNumberArray = (array) => {
  const result = array.reduce((sum, num) => sum + num, 0);
  return result;
};

// iterate over arrays in a specific way to find array sum of its elements equal to rightSum
// a = 1, b = 2 => [1, 1, 1, 2] => [1, 1, 2, 2] => [1, 2, 2, 2]
const findArray = (a, b, length, rightSum) => {
  const iter = (i) => {
    if (i === 0) {
      throw new Error('Error: findArray is broken');
    }
    const aArray = createArrayOfNumbers(a, length - i);
    const bArray = createArrayOfNumbers(b, i);
    const abArray = aArray.concat(bArray);
    const abArraySum = sumOfNumberArray(abArray);
    if (abArraySum === rightSum) {
      return abArray;
    }
    return iter(i - 1);
  };

  return iter(length - 1);
};

const generateQuestion = () => {
  const question = String(generateRandomNumber(990) + 10);
  return question;
};

const generateAnswer = (question) => {
  const arr = question.split('').map(Number);
  const arrSum = sumOfNumberArray(arr);
  const avrg = arrSum / arr.length;
  let answer;
  if (avrg % 1 === 0) {
    answer = createArrayOfNumbers(avrg, arr.length).join('');
  } else {
    const a = Math.floor(avrg);
    answer = findArray(a, a + 1, arr.length, arrSum).join('');
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
