const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	const	MODERN_ACTIVITY = 15,
			HALF_LIFE_PERIOD = 5730;
	if (typeof sampleActivity == "string" && !isNaN(Number(sampleActivity)) && Number(sampleActivity) > 0){
		let result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
		if (result > 0)
			return result;
		else
			return false;
	}

	else
		return false;
};
