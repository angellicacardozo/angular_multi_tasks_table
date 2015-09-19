var Task = require('../../config/database/mongo/schemas/task');
var api= {};

api.list = function(req, res) {
    Task.find({}, function(err, response) {
    	res.json({
    		tasks: response
    	});
    });
};

module.exports = api;