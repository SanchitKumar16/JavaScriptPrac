/* generateCards
Write a function that creates a deck of cards. The function will →

generate and return an array of card objects
each card object has a suit (♠, ♥, ♦, ♣) and a face (the strings '2' .. '10', 'J', 'Q', 'K', 'A')
the 52 resulting objects should represent every combination of suit and face
example list with two card objects: [{ suit: '♣', face: '2' }, { suit: '♦', face: '6' } ]
example usage: var cards = generateCards() */

var generateCards = function() {
	var suits = ['♠','♥','♦','♣'],
        faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        cards = [];
	for(var i = 0; i < suits.length; i++) {
		for(var j = 0; j < faces.length; j++) {
			cards.push({'suit':suits[i], 'face':faces[j]}); 
		}
	}
	return cards;
};
console.log(generateCards());