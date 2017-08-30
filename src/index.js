import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export const askNameAndSayHello = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const generateRandomNumber = (num) => {
  const result = Math.floor(Math.random() * num) + 1;
  return result;
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

  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, correctAnswer] = generateQA();
    if (!playRound(question, correctAnswer)) {
      console.log(`\nLet's try again, ${name}!`);
      break;
    }
    if (i === numberOfRounds) {
      console.log(`\nCongratulations, ${name}!`);
    }
  }
};
