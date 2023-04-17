const { NotImplementedError } = require('../extensions/index.js');

const isMAC48Address = (n) => /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i.test(n);

module.exports = {
  isMAC48Address
};
