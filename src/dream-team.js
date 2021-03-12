const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members){
	if (members instanceof Array){
	  let DreamTeamName = [];
	  for (let i in members){
		if (typeof members[i] === "string")
		  DreamTeamName.push(members[i].trim().toUpperCase().split("").shift());
	  }
	  return DreamTeamName.sort().join("");
	}    
	else {
	  return false;
	}
  };
