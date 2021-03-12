const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(valueOfDate){
	if (valueOfDate == undefined){
		return 'Unable to determine the time of year!';
	} else {
		if (Object.prototype.toString.call(valueOfDate) === '[object Date]'){
			if (valueOfDate.getMonth() >= 2 && valueOfDate.getMonth() <= 4)
				return "spring";
			else if (valueOfDate.getMonth() >= 5 && valueOfDate.getMonth() <= 7)
				return "summer";
			else if (valueOfDate.getMonth() >= 8 && valueOfDate.getMonth() <= 10)
				return "autumn";
			else 
				return "winter";
		} else 
		throw new Error("Shh! An enemy scout has lurked among the arguments that come into this function.");
	};
}
