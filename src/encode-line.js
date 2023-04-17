const { NotImplementedError } = require('../extensions/index.js');

const encodeLine = (s) => {
  const arr = [], cache = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i], obj = {};
    obj[char] = ++count;

    for (let j = i + 1; j <= s.length; j++) {
      if (char === s[j]) obj[char] = ++count;
      else {
        count = 0;
        if (!s[j] && s[i - 1] !== s[i]) cache.length = 0;
        if (!cache.includes(char)) {
          cache.push(char);
          arr.push(obj);
        }
        break;
      }
    }
  }

  return arr.map((item) => {
    const entries = Object.entries(item), [key,value] = entries.flat(1);
    return (value > 1 ? value : '') + key; 
  }).join('');
}

module.exports = {
  encodeLine
};
