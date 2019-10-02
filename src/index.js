module.exports = function zeros(expression) {
  const arrayOfNumbers = expression.split('*');
  let numberOfTwos = 0;
  let numberOfFives = 0;

  const calculateTwosAndFivesInFactorial = number => {
    for (let i = number; i > 0; i -= 1) {
      if (i % 2 === 0) {
        numberOfTwos++;
      };
      
      if (i % 5 === 0) {
        numberOfFives++;
      };

      if (i % 25 === 0) {
        numberOfFives++;
      };
    };
  };

  const calculateTwosAndFivesInDoubleFactorial = number => {
    for (let i = number; i > 0; i -= 2) {
      if (i % 2 === 0) {
        numberOfTwos++;
      };
      
      if (i % 5 === 0) {
        numberOfFives++;
      };

      if (i % 25 === 0) {
        numberOfFives++;
      };
    };
  };

  arrayOfNumbers.forEach(n => {
    if (n[n.length - 1] === '!' && n[n.length - 2] !== '!') {
      const number = parseInt(n);

      calculateTwosAndFivesInFactorial(number);
    };

    if (n[n.length - 1] === '!' && n[n.length - 2] === '!') {
      const number = parseInt(n);

      calculateTwosAndFivesInDoubleFactorial(number);
    };
  });

  return Math.min(numberOfTwos, numberOfFives);
};