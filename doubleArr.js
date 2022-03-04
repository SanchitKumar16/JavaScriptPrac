const numbers = [1, 2, 3];
const doubleValues = function(arr) {
	const doubled = [];
	for(let i = 0; i < arr.length; i++) {
		doubled.push(arr[i] * 2);
	}
	return doubled;
};
result = doubleValues(numbers);
console.log(numbers);
console.log(result);