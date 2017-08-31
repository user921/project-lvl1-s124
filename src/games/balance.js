import { generateRandomNumber } from '..';

export const quest = 'Balance the given number.';

const createArrayOfNumbers = (num, length) => {
  const result = new Array(length + 1).join(num).split('').map(str => Number(str));
  return result;
};

const sumOfNumberArray = array => array.reduce((sum, num) => sum + num, 0);

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
  throw new Error('Error: iterateOver is broken');
};

export const generateQA = () => {
  const randomNumber = generateRandomNumber(1000) + 10;
  const arr = randomNumber.toString().split('').map(str => +str);
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
