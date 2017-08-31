import { startGame } from '..';
import generateRandomNumber from './utils';

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
  for (let i = 1; i < length; i += 1) {
    const aArray = createArrayOfNumbers(a, length - i);
    const bArray = createArrayOfNumbers(b, i);
    const abArray = aArray.concat(bArray);
    const abArraySum = sumOfNumberArray(abArray);
    if (abArraySum === rightSum) {
      return abArray;
    }
  }
  throw new Error('Error: findArray is broken');
};

const generateQA = () => {
  const randomNumber = generateRandomNumber(990) + 10;
  const arr = randomNumber.toString().split('').map(Number);
  const arrSum = sumOfNumberArray(arr);
  const avrg = arrSum / arr.length;
  let correctAnswer;
  if (avrg % 1 === 0) {
    correctAnswer = createArrayOfNumbers(avrg, arr.length).join('');
  } else {
    const a = Math.floor(avrg);
    correctAnswer = findArray(a, a + 1, arr.length, arrSum).join('');
  }
  return [`${randomNumber}`, correctAnswer];
};

export default () => {
  startGame(quest, generateQA);
};
