const { NotImplementedError } = require('../extensions/index.js');

const getEmailDomain = (email) => {
  const result = email.split('@')[1].length > 2 ? email.split('@')[email.split('@').length - 1] : email.split('@')[1];
  const hasDom = result.split('.');
  return hasDom.length > 2 ? hasDom.splice(1, hasDom.length - 1).join('') : result;
}

module.exports = {
  getEmailDomain
};
