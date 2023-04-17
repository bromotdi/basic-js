const { NotImplementedError } = require('../extensions/index.js');

const calculateHanoi = (disksNumber, turnsSpeed) => {
  const speed = turnsSpeed / 60 / 60, turns = 2 ** disksNumber - 1, seconds = Math.floor(turns / speed);
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
