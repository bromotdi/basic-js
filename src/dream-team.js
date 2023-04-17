const { NotImplementedError } = require('../extensions/index.js');

const createDreamTeam = (mem) => {
  let arr = '';
  if(!Array.isArray(mem)) return false;
  for (let name of mem)
    if (typeof name === 'string')
      arr += name.trim()[0];
  return (arr.length === 0) ? false : arr.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
