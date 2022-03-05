var generateCards = function() {
	var suits = ['♠','♥','♦','♣'],
        faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        cards = [];
	suits.forEach(function(suit) {
		faces.forEach(function(face) {
			cards.push({'suit':suit, 'face':face}); 
		});
	});
	return cards;
};
console.log(generateCards());

// -------------------------------------------> Go over this for each. 

var deck = generateCards();
var filtered = deck.filter(function(card) {
	return parseInt(card.face, 10) <= 3;
});
console.log(filtered);