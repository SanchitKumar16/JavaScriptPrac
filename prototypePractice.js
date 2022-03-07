/* Object.create - creates a new object with the specified [[prototype]] object and properties */

// our "template" object
const protoWerewolf = { 
	description: 'hairy', 
	howl: function(thing) {
		console.log('The werewolf howls at the ' + thing + '.');
	}
};

// make a new werewolf with Object.create
const sadWerewolf = Object.create(protoWerewolf);
sadWerewolf.mood = 'sullen';
sadWerewolf.howl('moon');

