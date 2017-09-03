// [a, b]
const generateRandomInt = (start, end) => {
  const result = Math.floor(Math.random() * ((end - start) + 1)) + start;
  return result;
};

export default generateRandomInt;
