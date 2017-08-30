import { generateRandomNumber } from '..';

export const quest = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  const result = (b === 0) ? Math.abs(a) : gcd(b, a % b);
  return result;
};

export const generateQA = () => {
  const rand1 = generateRandomNumber(30);
  const rand2 = generateRandomNumber(30);
  const correctAnswer = gcd(rand1, rand2);
  return [`${rand1} ${rand2}`, `${correctAnswer}`];
};
