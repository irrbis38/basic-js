const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== "string")
    str = str + "";

  let resultString = [];
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || "+";
  let addition = options.addition + "" || "";
  let additionSeparator = options.additionSeparator || "|";
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let transitAddition = [];

  if (options.addition != undefined || options.addition === null){
    for (j = 0; j < additionRepeatTimes; j++){
      transitAddition.push(addition);
    }
  }

  let resultAddition = transitAddition.join(additionSeparator);

  let transitString = str + resultAddition;

  for (i = 0; i < repeatTimes; i++){
    resultString.push(transitString);
  }

  return resultString.join(separator);
};