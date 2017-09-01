const generateRandomNumber = (lessThan) => {
  const result = Math.floor(Math.random() * lessThan);
  return result;
};

export default generateRandomNumber;
