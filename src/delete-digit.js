const { NotImplementedError } = require('../extensions/index.js');

const deleteDigit = (n) => {
  n += '';
  let arr =[];
  for (let i = 0; i < n.length; i++)
    arr.push(+n.replace(n[i], ''))
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
