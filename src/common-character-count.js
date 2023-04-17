const { NotImplementedError } = require('../extensions/index.js');

const getCommonCharacterCount = (str1, str2) => {
  let count = 0;
  str1 = str1.split('')
  str2 = str2.split('')
  str1.forEach((char) => { const idx = str2.indexOf(char);
    if (idx !== -1) {
      str2.splice(idx, 1);
      count++;
    }
  })
  return count
}

module.exports = {
  getCommonCharacterCount
};
