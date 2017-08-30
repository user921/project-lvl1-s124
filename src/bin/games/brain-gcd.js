#!/usr/bin/env node

import startGame from '../..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.');

const numberOfRounds = 3;

const gcd = (a, b) => {
  const result = (b === 0) ? Math.abs(a) : gcd(b, a % b);
  return result;
};

const generateQA = () => {
  const rand1 = Math.floor(Math.random() * 30);
  const rand2 = Math.floor(Math.random() * 30);
  const correctAnswer = gcd(rand1, rand2);
  return [`${rand1} ${rand2}`, `${correctAnswer}`];
};

startGame(numberOfRounds, generateQA);
