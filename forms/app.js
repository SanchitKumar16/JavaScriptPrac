const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: false }));

// this is middleware to log method and path

app.use(function(req, res, next) {
	console.log(req.method, req.path);
	next();
});

// oops, a global... ok for now...
let myName = '';

app.get('/', function(req, res) {
	res.render('simple-form', {'myName':myName});
});

app.post('/', function(req, res) {
	console.log(req.body);
	// change the global
	myName = req.body.myName;
	res.redirect('/');
});

app.listen(8080);