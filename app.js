var express = require('express');

var app = express();

config = require('./server/configure'),
app = config(app);

var port = process.env.PORT || 3000;
app.set('views', __dirname + '/views');

/*app.get('/', function(req, res){
	res.send("Welcome to Nodejs App");
});*/
app.listen(port, function(){
	console.log('Running of PORT:' + port);
});