const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links:[],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    (value !== undefined) ? this.links.push(`( ${value} )`) : this.links.push("()");
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || (position < 1 && position > this.links.length)) {
      this.links = [];
      throw new Error("Invalid position");
    }
    this.links.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let result = this.links.join("~~");
    this.links = [];
    return result;
  }
};

module.exports = chainMaker;
