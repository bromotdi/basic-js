const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  simpleChain : [],

  addLink(value) {
    this.simpleChain.push(`( ${value} )`)
    return this
  },

  removeLink(position) {
    if ( !this.simpleChain[position - 1]) {
      this.simpleChain = []
      throw new Error ("You can't remove incorrect link!");
    }
    this.simpleChain.splice(position -1, 1)
    return this
  },

  reverseChain() {
    this.simpleChain.reverse()
    return this
  },

  finishChain() {
    let chainNew = [...this.simpleChain]
    this.simpleChain = []
    return chainNew.join('~~')
  }
};

module.exports = {
  chainMaker
};
