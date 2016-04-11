var express = require('express');
var app = express();
var PORTLISTEN = 3000;

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

app.use(express.static(__dirname + '/public'));

// app.use(middleware.requireAuthentification);
app.use(middleware.logger);

// app.get('/about', function(request, response){
// 	response.send('About Us');
// });



app.get('/about', middleware.requireAuthentification, function(request, response){
	response.send('About Us');
});



// app.get('/', function(request, response){
// 	response.send('Hello Express!');
// });






app.listen(PORTLISTEN, function (){
	console.log('Express Server started on port : ' + PORTLISTEN + '\n ctrl+c to stop it.');
	});