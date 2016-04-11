// var declaration
	var middleware = {
		requireAuthentification: function (req, res, next){
			console.log('private route hit!');
			next();
			},
		logger: function (req, res, next){
			console.log(new Date().toString() + ' || request: ' + req.method + ' ' + req.originalUrl);
			next();
			}
		};
	// End


module.exports = middleware;
