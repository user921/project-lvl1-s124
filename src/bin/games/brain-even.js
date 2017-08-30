#!/usr/bin/env node

import startGame from '../..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const numberOfRounds = 3;

const generateQA = () => {
  const random = Math.floor(Math.random() * 1000);
  const correctAnswer = random % 2 === 0 ? 'yes' : 'no';
  return [`${random}`, correctAnswer];
};

startGame(numberOfRounds, generateQA);
