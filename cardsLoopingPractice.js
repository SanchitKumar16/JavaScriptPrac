const cards = [{'suit':'♦', 'face':'4'},
             {'suit':'♠', 'face':'J'},
             {'suit':'♠', 'face':'Q'},
             {'suit':'♣', 'face':'Q'},
             {'suit':'♠', 'face':'2'},
             {'suit':'♦', 'face':'7'},
             {'suit':'♥', 'face':'K'}];



let count = 0;
cards.forEach(function(card) {
	if (['K', 'Q', 'J'].indexOf(card.face) !== -1) {
		count += 1;
	} 
});
console.log(count);


