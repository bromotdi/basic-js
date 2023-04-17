const { NotImplementedError } = require('../extensions/index.js');

const getMatrixElementsSum = (matrix) => {
  let result = 0;
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) result += matrix[i][j];
      else if (matrix[i - 1][j] !== 0) result += matrix[i][j];
    }
  return result;
}

module.exports = {
  getMatrixElementsSum
};
