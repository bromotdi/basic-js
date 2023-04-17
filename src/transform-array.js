const { NotImplementedError } = require('../extensions/index.js');

const transform = (arr) => {
  if (!Array.isArray(arr) || !arr) throw new Error('\'arr\' parameter must be an instance of the Array!');
  let changeNext = false;
  const result = [], copy = [...arr];

  for (let i = 0; i < copy.length; i++) {
    const current = copy[i];
    if (changeNext) {
      changeNext = false;
      continue;
    }
    if (current === '--discard-next') {
      changeNext = true;
      result[i] = undefined;
      result[i + 1] = undefined;
      continue;
    };
    if (current === '--discard-prev') {
      result.splice(i - 1, 1);
      continue;
    };
    if (current === '--double-next') {
      changeNext = true;
      result[i] = copy[i + 1];
      result.push(result[i]);
      continue;
    }
    if (current === '--double-prev') {
      result[i] = result[i - 1];
      continue;
    }
    result.push(current);
  }
  return result.filter((el) => el);
}

module.exports = {
  transform
};
