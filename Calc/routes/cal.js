/*
 * GET home page.
 */
exports.cal = function(req, res) {
	res.render('cal', {
		title : 'Simple Calculator'
	});
};

exports.add = function(req, res) {

	var paramOne = req.param("paramOne");
	var paramTwo = req.param("paramTwo");
	var result = Number(paramOne) + Number(paramTwo);
	var json_response = {
		"statusCode" : 200,
		"result" : result
	};
	res.send(json_response);
};

exports.sub = function(req, res) {

	var paramOne = req.param("paramOne");
	var paramTwo = req.param("paramTwo");
	var result = Number(paramOne) - Number(paramTwo);
	var json_response = {
		"statusCode" : 200,
		"result" : result
	};
	res.send(json_response);
};

exports.mul = function(req, res) {

	var paramOne = req.param("paramOne");
	var paramTwo = req.param("paramTwo");
	var result = Number(paramOne) * Number(paramTwo);
	var json_response = {
		"statusCode" : 200,
		"result" : result
	};
	res.send(json_response);
};

exports.div = function(req, res) {

	var paramOne = req.param("paramOne");
	var paramTwo = req.param("paramTwo");
	var json_response;
	if (paramTwo !== 0) {
		var result = Number(paramOne) / Number(paramTwo);
		json_response = {
			"statusCode" : 200,
			"result" : result
		};
		res.send(json_response);
	} else {
		json_response = {
			"statusCode" : 401
		};
		res.send(json_response);
	}
};