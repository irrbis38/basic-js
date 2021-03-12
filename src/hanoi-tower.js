const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed){
	turns = Math.pow(2, diskNumber) - 1;
	seconds = Math.floor(this.turns * 3600 / turnsSpeed);
	return {turns: this.turns, seconds: this.seconds};
}