const { NotImplementedError } = require('../extensions/index.js');

const minesweeper = (m) => {
  const result = [];
  let mine = 0;
  for (let i = 0; i < m.length; i++) {
    result[i] = [];
    for (let j = 0; j < m[i].length; j++) {
      mine = 0;
      for (let di = -1; di < 2; di++)
        for (let dj = -1; dj < 2; dj++)
          if(i + di >= 0 && i + di < m.length - 1 && j + dj >= 0 && j + dj < m[i].length - 1 && !((di === 0) && (dj === 0)))
            if (m[i + di][j + dj]) mine++;
      result[i][j] = mine;
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
