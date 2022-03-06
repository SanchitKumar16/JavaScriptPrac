/* Call and Apply
Both call and apply immediately execute the function that they're called on.

they differ in the way that arguments are passed to the original function object (call passes each argument individually, while apply passes an array)
the example below sets this to null - we'll see more about this later */

function areaTriangle(base, height) {
	return (1 / 2 ) * base * height;
}

const result1 = areaTriangle.call(null, 10, 20);
console.log(result1);
const result2 = areaTriangle.apply(null, [10, 20]);
console.log(result2);