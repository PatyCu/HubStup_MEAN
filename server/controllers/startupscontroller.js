/*var restful = require('node-restful');

module.exports = function(app, route){
	
	// Setup the controller for REST
	var rest = restful.model(
		'movie',
		app.models.movie
		).methods(['get', 'put', 'post', 'delete']);

	// Register this endpoint with the application
	rest.register(app, route);

	// Return middleware
	return function(req, res, next) {
		next();
	};
};*/

var Resource = require('resourcejs');
module.exports = function(app, route) {
	console.log("startups controller");
  // Setup the controller for REST;
  Resource(app, '', route, app.models.startups).rest();

  // Return middleware.
  return function(req, res, next) {
  	console.log("REQ: " + req);
  	console.log("RES: " + res);
    next();
  };
};
