import { generateRandomNumber, sumOfNumberArray, createArrayOfNumbers, findArray } from '..';

export const quest = 'Balance the given number.';

export const generateQA = () => {
  const randomNumber = generateRandomNumber(990) + 10;
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
