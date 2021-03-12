const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr){
  if(!(arr instanceof Array))
    throw new Error("arr is not an Array");
  else {
    let result = [];
      for (let i = 0; i < arr.length; i++){
        if (arr[i] == "--discard-next")
          i++;
        else if (arr[i] == "--discard-prev")
          (i > 0 && arr[i - 2] != "--discard-next") ? result.pop() : result;
        else if (arr[i] == "--double-next")
          (i < arr.length - 1) ? result.push(arr[i + 1]) : result;
        else if (arr[i] == "--double-prev")          
          (i > 0 && arr[i - 2] != "--discard-next") ? result.push(arr[i - 1]) : result;
        else
          result.push(arr[i]);
      }    
    return result;
  }	
}
