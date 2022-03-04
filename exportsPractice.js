const creaturesModule = require('./creatures.js');
creaturesModule.makeCreatureList().forEach(function(name) {
	console.log(name);
});


// uses the exports object to create module. Go over this in more detail. s