import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export const askNameAndSayHello = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const generateRandomNumber = (lessThan) => {
  const result = Math.floor(Math.random() * lessThan);
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

export const createArrayOfNumbers = (num, length) => {
  const result = new Array(length + 1).join(num).split('').map(str => Number(str));
  return result;
};

export const sumOfNumberArray = (array) => {
  const result = array.reduce((sum, num) => sum + num, 0);
  return result;
};

// iterate over arrays in a specific way to find array sum of its elements equal to rightSum
// a = 1, b = 6 => [1, 1, 1, 2] => [1, 1, 2, 2] => [1, 2, 2, 2]
export const findArray = (a, b, length, rightSum) => {
  for (let i = 1; i < length; i += 1) {
    const aArray = createArrayOfNumbers(a, length - i);
    const bArray = createArrayOfNumbers(b, i);
    const abArray = aArray.concat(bArray);
    const abArraySum = sumOfNumberArray(abArray);
    if (abArraySum === rightSum) {
      return abArray;
    }
  }
  throw new Error('Error: findArray is broken');
};
