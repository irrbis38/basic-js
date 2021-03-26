const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor (direct = true) {
    this.direct = direct;
  }
  
  encrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined")
      throw new Error('You need specify two parameters.');
  
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cryptMessage = message.toUpperCase().split("");
    let cryptKey = key.toUpperCase().split("");
    let cryptString = [];
  
    let j = 0;
    for(let i=0; i < cryptMessage.length; i++){
      if (j == cryptKey.length)
        j = 0;
      if (/[A-Za-z]/.test(cryptMessage[i]))
        cryptString.push(cryptKey[j]);
      else {
        cryptString.push(cryptMessage[i]);
        j = j-1;
      }
      j++;
    }
  
    let result = [];
    for (let i=0; i<cryptMessage.length; i++){
      if (/[A-Za-z]/.test(cryptMessage[i])){
        let index = alphabet.indexOf(cryptMessage[i]) + alphabet.indexOf(cryptString[i]);
        if (index > 25)
          index = index - 26;
        result.push(alphabet[index]);
      }
      else {
        result.push(cryptMessage[i]);
      }
    }
  
    return (this.direct) ? result.join("") : result.reverse().join("");
  }

decrypt(message, key) {
    if (typeof message == "undefined" || typeof key == "undefined")
      throw new Error('You need specify two parameters.');
  
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let encryptMessage = message.toUpperCase().split("");
    let encryptKey = key.toUpperCase().split("");
    let encryptString = [];
  
    let j = 0;
    for(let i=0; i < encryptMessage.length; i++){
      if (j == encryptKey.length)
        j = 0;
      if (/[A-Za-z]/.test(encryptMessage[i]))
        encryptString.push(encryptKey[j]);
      else {
        encryptString.push(encryptMessage[i]);
        j = j-1;
      }
      j++;
    }
  
    let result = [];
    for (let i=0; i<encryptMessage.length; i++){
      if (/[A-Za-z]/.test(encryptMessage[i])){
        let index = alphabet.indexOf(encryptMessage[i]) - alphabet.indexOf(encryptString[i]);
        if (index < 0)
          index = index + 26;
        result.push(alphabet[index]);
      }
      else {
        result.push(encryptMessage[i]);
      }
    }
  
    return (this.direct) ? result.join("") : result.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
