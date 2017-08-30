import readlineSync from 'readline-sync';

export const askNameAndSayHello = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const makeEvenRound = () => {
  const random = Math.floor(Math.random() * 1000);
  const correctAnswer = random % 2 === 0 ? 'yes' : 'no';

  console.log(`\nQuestion: ${random}`);
  const answer = readlineSync.question('Your answer: ').toLowerCase();

  if (answer !== correctAnswer) {
    console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLet's try again, Bill!`);
    return false;
  }
  console.log('Correct!');
  return true;
};
