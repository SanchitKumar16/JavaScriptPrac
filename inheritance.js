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

function SpaceWerewolf(mood) {
    Werewolf.call(this, mood);
}
SpaceWerewolf.prototype = Object.create(Werewolf.prototype);
SpaceWerewolf.prototype.constructor = SpaceWerewolf;

const sadWerewolf = new Werewolf('sad');
const partyWerewolf = new Werewolf('partying');
const w = new SpaceWerewolf('in space');
// console.log(w.mood);
// console.log(w.constructor);

// for (const p in partyWerewolf) {
// 	console.log(p + ': ' + partyWerewolf[p]);
// }

// for (const p in sadWerewolf) {
// 	console.log(p + ': ' + sadWerewolf[p]);
// }

console.log('party\n-----');
for (const p in partyWerewolf) {
	if (partyWerewolf.hasOwnProperty(p)) {
		console.log(p + ': ' + partyWerewolf[p]);
	}
}
console.log('\n');

console.log('sad\n-----');
for (const p in sadWerewolf) {
	if (sadWerewolf.hasOwnProperty(p)) {
		console.log(p + ': ' + sadWerewolf[p]);
	}
}  // see what this is about in goOver.txt