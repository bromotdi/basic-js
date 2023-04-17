const { NotImplementedError } = require('../extensions/index.js');

const getSumOfDigits = (n) => {
  const str = String(n), array = str.split(''), sum = array.reduce((a, b) => +a + +b, 0);
  return (String(sum).length > 1) ? getSumOfDigits(sum) :  sum;
}

module.exports = {
  getSumOfDigits
};
