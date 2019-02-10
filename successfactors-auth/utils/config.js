var configurations = require('core/v3/configurations');

exports.getHost = function() {
	return configurations.get("SUCCESSFACTORS_HOST");
};

exports.getCompany = function() {
	return configurations.get("SUCCESSFACTORS_COMPANY");
};

exports.getUser = function() {
	return configurations.get("SUCCESSFACTORS_USER");
};

exports.getPassword = function() {
	return configurations.get("SUCCESSFACTORS_PASSWORD");
};