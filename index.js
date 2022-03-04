// in the code below, w => w.toUpperCase() is a shorthand 
// way of creating a function (an arrow function or a 
// lambda), which is then passed to the array method, map

//const  words = ['yachty', 'boaty', 'canooey'];
//upper_case_words = words.map(w =>{
//    console.log(w);
//    return w.toUpperCase();
//});

//let upper_case_words = [];
//for( let i = 0; i < words.length; i++) {
    //console.log(words[i]);
   // upper_case_words.push(uppercase(words[i]));
//}
// upper_case_words = words.map(uppercase);

// function uppercase(w){
//    // console.log(w);
//     return w.toUpperCase();
// }


// console.log(upper_case_words);

// console.log(words);      // Crtl + K + C

// console.log(typeof 23);
// console.log(typeof false);
// console.log(typeof "Hello");
// console.log(typeof 23.02);

// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof false);
// console.log(typeof 5);
// console.log(typeof 'foo');
// console.log(typeof console.log);
// console.log(typeof [1, 2, 3, 4]);


// console.log(0.1 + 0.2 === 0.3); // false!?
// console.log(Math.abs((0.1 + 0.2) - 0.3) < 0.0000000000000004);  // true!


// console.log(+12);
// console.log(-12);
// console.log(-"12");
// console.log(+"12");
// console.log(-true);
// console.log(-'hi');


//  console.log(2 & 3);
//  console.log(7 ^ 3);
//  console.log();
//  console.log();

// console.log(typeof NaN);
// console.log(typeof Infinity);

// let val = 3;
// let nval = NaN;

// console.log(isNaN(val));
// console.log(isNaN(nval));

/* Go over the code below in more detail */ 

// const s1 = `such
// lines
// wow`;

// const food1 = 'bacon';
// const food2 = 'pancakes';
// const s2 = `Makin' ${food2}, makin' ${food1} ${food2}!`;

// console.log(s1)
// console.log(s2);


// // outputs "in here"
// if("this string says false, but...!?") {
// 	console.log("in here!");
// }

// // no output
// var myString = "";

// if(myString) {
// 	console.log("you shouldn't see me!");
// }


// The operator precedence for logical operators is not, and, and or.


/* Go over below code in more detail */

// console.log(5 - 5 || 2);
// console.log(5 - 5 && 2);
// console.log("hello" || "goodbye");
// console.log("hello" &&  "goodbye");

// // ternary followed by equivalent if/else
// let x = 5 > 2 ? 'yes' : 'no';
// console.log(x);

/* Go over the code below */

// // do this (call constructor named after type as a function)
// i = Number("2")
// a = Boolean(false);
// // not this (not a good idea to use new!)
// b = new Boolean(false);
// // because
// console.log(typeof a); // --> boolean
// console.log(typeof b); // --> object
// // ... and 😒
// Boolean(new Boolean(false)) // True!?

/* Variables and Some Built-In Functions */

// // Expression (no semicolon), evaluates to 6
// 1 + 5

// // Statement, contains an expression
// 1 + 5;

// // Statement, contains multiple expressions
// parseInt("4" + "2");

// // Even these are statements:
// 1;
// "hi";


/*

If you declare a function using this (function declaration) syntax: →


function f() {
    // do stuff
}


you have a single statement (note, no semicolon at the end).

However, any statement that:

involves functions
but doesn't start with the actual keyword, function
will have a function expression (that is, an expression that evaluates to a function) in it: */

// // function declaration, a single statement
// function f() {
//     // do stuff
// }


// const foo = function bar(bax) {}; // <-- function expression
// const qux = function(corge) {}; // <-- function expression

// console.log(parseInt("100", 2)); // binary 
// console.log(parseInt("100", 10)); // decimal
// console.log("hi", "hello");

// {
//     const s = 'in'; // just need two curly braces to make a block!
// }

// for(let i = 0; i < 10; i++) {
//     const s = 'also in'; // for loop body is a block!
//  }


// function f() {
//     const s = 'in too'; // function body is a block!
// }


// {
//     const first = 'out there';
//     {
//         const full = `${first} in here`;
//         console.log(full);
//     }
// }


// console.log(s);
// let s = 'after!';
// // ReferenceError! s was used before it was declared
// // Go over Temporal Dead Zone. 

// const foo;
// foo = 'bar'
// // SyntaxError: Missing initializer in const declaration

// let a;
// console.log(a);  // default value is undefined. 

// for(let i = 0; i < 10; i++) { console.log(i); }    

// for(let i = 0; i < 10; i++) { 
//     const j = i * 2;
//     console.log(j);
//   }    

/* Objects */



// // using the same object from previous slides...
// const course = { name:'Applied Internet Technology', 
//                   section:8,
//                   undergraduate:true 
//              };

        
// // setting up user input
// const readline = require('readline');
// const p = readline.createInterface({ input: process.stdin, output: process.stdout });
// p.question('Type in an object key\n>', function (resp) {
// 	// TODO: print value at key

//     p.close();
// });                              ---------------> Go over this code.


// const obj = {};
// function f() {
//     console.log("Hi, I'm a method!");
// }
// obj.doStuff = f;

// const a = {'foo':1, 'bar':2};
// const b = a;
// b['baz'] = 3;
// b.qux = 4;
// console.log(a);

// const course = { 
//                 name:'Applied Internet Technology', 
//                 section:8,
//                 undergraduate:true 
//              };

        

// console.log(course.hasOwnProperty('name')); // true
// console.log(course.hasOwnProperty('oh no, not here')); // false

// for (const property in course) {
// 	if (course.hasOwnProperty(property)) {
// 		console.log(property +  " is " + course[property]);
// 	}
// }

// console.log(JSON.parse("[1, 2, 3]")[1]);

/* Functions (Closures, Optional Arguments) */


// let g = 7;
// function f() {
//     g = 5;
//     function g() {}
//     console.log(g);
// }
// f();
// console.log(g);

// let x = 10;
// function f() {
//   function g() {
//    let x = 20; 
//   }
//   g(); 
// }
// console.log(x);
// f();
// console.log(x);

// function hiEveryone(greeting, ...names) {   // ---------> using the rest '...' operator. 
//     console.log(greeting);
//     console.log(names);
// }
// hiEveryone('Hello', 'Alice', 'Bob', 'Carol');

// const f = function() {
//     console.log("number of args " + arguments.length);
//     for (let i = 0, j = arguments.length; i < j; i++) {
//         console.log(arguments[i]);
//     }
// };
// f(1, 2, 3);

/* 
The arguments object is array-like, but not an array. (Let's see. →)

you can index into it
you can get its length
you can loop over it (with a regular for loop)
no methods, though (no slice, pop, forEach, etc.)

*/

/*

Create a function called mySum that takes an arbitrary number of numbers
as separate arguments and returns the sum of all of the arguments

*/

// var mySum = function() {
// 	var total = 0;   // -------------------------> uses the arguments object to take an arbitrary amount of parameters. 
// 	for(var i = 0; i < arguments.length; i++) {
// 		total += arguments[i];
// 	}
// 	return total;
// }

// console.log(mySum(1, 2, 3)); // --> 6

/* We can use the || operator to give a default value if the value on the left is false-y: */

// function greetTheWorld(greeting) {
// 	console.log((greeting || "Hello") + " world!");
// }

// greetTheWorld('Poop');

// function f(x=1) {
//     console.log(x);
// }
// f(); // no args, result is 1!


/* a closure is a special kind of object that combines two things:
a function
the environment in which that function was created
the environment consists of any local letiables that were in-scope at the time that the closure was created
 */

// example of a closure code 

// let makeAdder = function(x) {
// 	return function(y) {
// 		return y + x;
// 	}
// };

// let addTwo = makeAdder(2);
// console.log(addTwo(5));


// a = [2, 4, 6, 8];
// console.log(a.slice());
// console.log(a.slice(1));
// console.log(a.slice(1, 3));
// console.log(a.slice(-1));
// console.log(a);

// const a = [1, 2, 3];
// const b = a.slice();
// a.push(4);
// console.log(b);
// console.log(a);

// const a = [{}, 2, 3];
// const b = a.slice();
// b[0].tricky = 'yup, same object';
// console.log(a);


/*Looping Over Arrays Part 1
Loop over nums = [1, 2, 3, 4]; and print out double the value of every element. Do this three ways → */

// nums = [1, 2, 3, 4];

// // with classic for loop and length caching
// for(let i = 0, cachedLength = nums.length; i < cachedLength; i++) {
// 	console.log(nums[i] * 2);
// }

// // with forEach (define callback first)
// const doubleIt = function(x) {
// 	console.log(x * 2);
// }
// nums.forEach(doubleIt); 

// // (Or with an anonymous function)
// // with forEach
// nums.forEach(function(num, i) {
// 	console.log(num * 2);
// });

// /* And Part 3: for…of
// Use for…of. It's similar in expressiveness to forEach, but only available in ES6 → */

// const words = ['foo', 'bar', 'baz']
// for (let w of words) {
//     console.log(words);
// }

// /* you can use break and continue!
// can be used to go over other iterable objects, like strings, the arguments object, etc. */

// const f = function() {
//     // btw... ok - I get the funny coercion rules now
//     console.log("number of args " + arguments.length);
//     for (let i = 0, j = arguments.length; i < j; i++) {
//         console.log(arguments[i]);
//     }                                    // --------------------------> go over more about context and scope. 
// };  
// f(1, 2, 3);