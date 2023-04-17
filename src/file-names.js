const { NotImplementedError } = require('../extensions/index.js');

const renameFiles = (names) => {
  if (!names.length) return [];

  const arr = names.map((item, index, arr) => {
    return { name: item, coincedence: arr.filter((el) => el == item).length }
  }).filter((el) => el.coincedence > 1);

  const array = [];

  for (let i = 0; i < arr.length; i++)
    for (let j = 1; j < arr.length; j++)
      if (arr[i].name !== arr[j].name) array.push(arr[i])

  if (!array.length && arr[0]) array.push(arr[0]);

  let count = -1;
  let repeatedCount = 0;

  return  array.length ? [...names.map((item) => {
    const current = array.find((el) => el.name === item.split('(')[0]);
    if (current) {
      const repeted = item.split('(').length > 1;
      (!repeted) ? count++ : repeatedCount++;
      const suffix = count === 0 ? '' : `(${count})`;
      const result = item + (repeted ? `(${repeatedCount})` : suffix);
      return result;
    }
    else return item;
  })] : names;
}

module.exports = {
  renameFiles
};
