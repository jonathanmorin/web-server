// VAR declaration
	var express = require('express');
	var middleware = require('./modules/middleware.js');
	var app = express();
	
	var PORTLISTEN = 3000;
	// End



app.use(middleware.logger); // Need to be on the beginning of the function we want to track




app.get('/about', middleware.requireAuthentification, function(request, response){
	response.send('About Us !');
});

app.use(express.static(__dirname + '/public')); // accessible by public



app.listen(PORTLISTEN, function (){
	console.log('Express Server started on port : ' + PORTLISTEN + '\n ctrl+c to stop it.');
	});