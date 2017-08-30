#!/usr/bin/env node

import { startGame } from '../..';

console.log('Welcome to the Brain Games!\n');
console.log('What is the result of the expression?');

const numberOfRounds = 3;

const generateQA = () => {
  const rand1 = Math.floor(Math.random() * 100);
  const rand2 = Math.floor(Math.random() * 100);
  const sign = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = rand1 + rand2;
      break;
    case '-':
      correctAnswer = rand1 - rand2;
      break;
    case '*':
      correctAnswer = rand1 * rand2;
      break;
    default:
      break;
  }
  return [`${rand1} ${sign} ${rand2}`, `${correctAnswer}`];
};

startGame(numberOfRounds, generateQA);
