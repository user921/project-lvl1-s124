#!/usr/bin/env node

import { askNameAndSayHello, makeEvenRound } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = askNameAndSayHello();
const numberOfRounds = 3;

for (let i = 1; i <= numberOfRounds; i += 1) {
  if (!makeEvenRound()) {
    console.log(`\nLet's try again, ${name}!`);
    break;
  }
  if (i === numberOfRounds) {
    console.log(`\nCongratulations, ${name}!`);
  }
}
