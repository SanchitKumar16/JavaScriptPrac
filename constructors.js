function Werewolf(mood) {
	this.mood = mood;
}

const sadWerewolf = new Werewolf('sad'); 
const partyWerewolf = new Werewolf('partying'); 
// console.log(partyWerewolf.mood);

Werewolf.prototype.howl = function(thing) {
	console.log('The werewolf howls at the ' + thing + '.');
}
// sadWerewolf.howl('moon');
// partyWerewolf.howl('bowl of chips');

console.log(partyWerewolf);
Werewolf.prototype.toString = function() {
	return this.mood + ' werewolf';
};
console.log(partyWerewolf + '');