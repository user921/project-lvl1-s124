import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export const askNameAndSayHello = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const playRound = (question, correctAnswer) => {
  console.log(`\nQuestion: ${question}`);
  const answer = readlineSync.question('Your answer: ').toLowerCase();

  if (answer !== correctAnswer) {
    console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

export const startGame = (quest, generateQA) => {
  console.log('Welcome to the Brain Games!');
  console.log(quest);

  const name = askNameAndSayHello();

  const iter = (i) => {
    if (i === 0) {
      return;
    }
    const [question, answer] = generateQA();
    if (!playRound(question, answer)) {
      console.log(`\nLet's try again, ${name}!`);
      return;
    }
    if (i === 1) {
      console.log(`\nCongratulations, ${name}!`);
    }
    iter(i - 1);
  };

  iter(numberOfRounds);
};
