const { NotImplementedError } = require('../extensions/index.js');

const getDNSStats = (doms) => {
  let res = {}
  for (let i = 0; i < doms.length; i++) {
    let dom = [], key = '';
    dom = doms[i].split('.').reverse()
    for (let j = 0; j < dom.length; j++) {
      key += `.${dom[j]}`;
      res[key] ? res[key]++ : res[key] = 1;
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
