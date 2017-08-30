import readlineSync from 'readline-sync';

export const askNameAndSayHello = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const makeEvenRound = (question, correctAnswer) => {

  console.log(`\nQuestion: ${question}`);
  const answer = readlineSync.question('Your answer: ').toLowerCase();

  if (answer !== correctAnswer) {
    console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export const startGame = (numberOfRounds, generateQA) => {
  const name = askNameAndSayHello();

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, correctAnswer] = generateQA();
    if (!makeEvenRound(question, correctAnswer)) {
      console.log(`\nLet's try again, ${name}!`);
      break;
    }
    if (i === numberOfRounds) {
      console.log(`\nCongratulations, ${name}!`);
    }
  }
};
