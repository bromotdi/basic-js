const { NotImplementedError } = require('../extensions/index.js');

const repeater = (str, options) => {
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  let res = '';

  if (repeatTimes) {
    for (let i = 0; i < repeatTimes; i++) {
      res += String(str);
      if (String(addition) !== 'undefined') {
        if (additionRepeatTimes) {
          for (let j = 0; j < additionRepeatTimes; j++) {
            res += String(addition);
            if (additionSeparator && j !== additionRepeatTimes - 1) res += additionSeparator;
            else if (!additionSeparator && j !== additionRepeatTimes - 1) res += '|';
          }
        }
        else res += String(addition);
      }

      if (separator && i !== repeatTimes - 1) res += separator;
      else if (!separator && i !== repeatTimes - 1) res += '+';
    }
  }

  else {
    res += str;
    if (addition) {
      if (additionRepeatTimes) {
        for (let i = 0; i < additionRepeatTimes; i++) {
          res += addition;
          if (additionSeparator) res += additionSeparator;
        }
      }
      else res += addition;
    }
  }

  return res;
}

module.exports = {
  repeater
};
