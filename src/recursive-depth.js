const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr){
    let depthOfArray = 1;
    let counter = 0;
    if (arr instanceof Array && arr.length == 0)
      return 1;
    else if (arr instanceof Array && arr.length > 0){
      for (let i = 0; i < arr.length; i++) {
        if(!(arr[i] instanceof Array)){
          counter = 1;
        }
        else {
          counter = 1 + this.calculateDepth(arr[i]);        
          if (counter > depthOfArray)
          depthOfArray = counter;
        }
      }
    }
    return depthOfArray;
  }
};