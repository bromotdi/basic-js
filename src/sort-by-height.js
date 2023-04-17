const { NotImplementedError } = require('../extensions/index.js');

const sortByHeight = (a) => {
  const result = a;
  const indexes = a.map((val, ind) => (val === -1 ? val : ind)).filter((v) => v !== -1);
  const sorted = a.filter((v) => v !== -1).sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });
  for (let i = 0; i < sorted.length; i++) result[indexes[i]] = sorted[i];
  return result;
}

module.exports = {
  sortByHeight
};
