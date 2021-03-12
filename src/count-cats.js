const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
	let cat = '^^';
	let result = [];
	for (let i in backyard){
		for (let j in backyard[i]){
			if (backyard[i][j] == cat)
				result.push(cat);
		}
	}
	return result.length;
};
