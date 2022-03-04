/* Filtering an Array
Create a function called filter that filters an array by: →

taking an array as one argument and a function, a test, as the other
it should return an entirely new array populated with only the elements that pass the test
test by using it to keep only the odd numbers in an array of numbers */

function filter(arr, test) {
	var filtered = [];
	arr.forEach(function(element) {
		if(test(element)) {
			filtered.push(element)
		}
	});
	return filtered;
}
result = filter([1, 2, 3, 4], function(x) { 
	return x % 2 == 1;
});
console.log(result);