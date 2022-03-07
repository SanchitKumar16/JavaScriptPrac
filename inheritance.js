/* A common pattern for implementing inheritance is to: →

-use a fresh object that has the prototype set to the parent constructor's prototype property (WAT?)
-as the child constructor's prototype property
-… which can be done with Object.create
Using our parent constructor, Werewolf */

function Werewolf(mood) {
    this.mood = mood;
}
Werewolf.prototype.howl = function(thing) {
	console.log('The werewolf howls at the ' + thing + '.');
}

function SpaceWerewolf() {}
SpaceWerewolf.prototype = Object.create(Werewolf.prototype);