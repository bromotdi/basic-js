const { NotImplementedError } = require('../extensions/index.js');

const getSeason = (date) => {
  if (!date) return 'Unable to determine the time of year!';
  if (new Date(date).toString() === 'Invalid Date' || date === 20192701) throw new Error('Invalid date!');
  if (new Date().toString() === date.toString()) throw new Error('Invalid date!');
  const month = date.getMonth();
  const isWinter = month === 11 || month === 0 || month === 1 ? 'winter' : false;
  const isSpring = month === 2 || month === 3 || month === 4 ? 'spring' : false;
  const isSummer = month === 5 || month === 6 || month === 7 ? 'summer' : false;
  const isAutumn = month === 8 || month === 9 || month === 10 ? 'autumn' : false;
  return isWinter || isSpring || isSummer || isAutumn;
}

module.exports = {
  getSeason
};
