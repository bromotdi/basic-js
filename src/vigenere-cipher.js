const { NotImplementedError } = require('../extensions/index.js');

class VigenereCipheringMachine {
  constructor(direct = true) { this.direct = direct; }

  encrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    let count = 0;
    let arr = [];
    msg = msg.toUpperCase().split('');
    key = msg.map((e, i) => {
      if (e === ' ') { count++; return e; }
      else return key.toUpperCase()[(i - count) % key.length]
    });
    for (let i = 0; i < msg.length; i++) {
      if (msg[i].charCodeAt(0) >= 65 && msg[i].charCodeAt(0) <= 90) {
        let charCode = msg[i].charCodeAt(0) - 65 + (key[i].charCodeAt(0) - 65);
        msg[i] = String.fromCharCode(charCode % 26 + 65);
      }
      arr.push(msg[i]);
    }
    return this.direct ? arr.join('') : arr.reverse().join('');
  }

  decrypt(msg, key) {
    if (!msg || !key) throw new Error('Incorrect arguments!');
    let count = 0, arr = [];
    msg = msg.toUpperCase().split('');
    key = msg.map((e, i) => {
      if (e === ' ') { count++; return e; }
      else return key.toUpperCase()[(i - count) % key.length]
    });
    for (let i = 0; i < msg.length; i++) {
      if (msg[i].charCodeAt(0) >= 65 && msg[i].charCodeAt(0) <= 90) {
        let charCode = msg[i].charCodeAt(0) + 65 - (key[i].charCodeAt(0) - 65);
        msg[i] = String.fromCharCode(charCode % 26 + 65);
      }
      arr.push(msg[i]);
    }
    return this.direct ? arr.join('') : arr.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
