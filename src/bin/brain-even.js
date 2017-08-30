import { askNameAndSayHello, makeEvenRound } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = askNameAndSayHello();
const numberOfRounds = 3;

for (let i = 1; i <= numberOfRounds && makeEvenRound(); i += 1) {
  if (i === numberOfRounds) {
    console.log(`\nCongratulations, ${name}!`);
  }
}
