/* In Node, All I/O is Non-Blocking and Asynchronous */

/*a callback is a function passed as an argument to another function that is expected to be executed at some later time 
(perhaps when an operation is completed, or a specific event occurs) */

// const fs = require('fs');

// function readFileWithPrologue(prologue) {
//   const s = prologue.toUpperCase();
//   fs.readFile('somefile.txt', 'utf8', function(err, data) {
//     console.log(s);
//     console.log('data', data + '');
//   });
//   console.log('DONE');
// }

// readFileWithPrologue('this is the prologue');    // -----------------------> go over these non blocking I/O calls.

/* Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following: 

(function (exports, require, module, __filename, __dirname) {
    // Your module code actually lives in here
});


which keeps top level variables scoped to the module than global 
(so when you require a module, it doesn't pollute your global name space!)
It helps to provide some global-looking variables that are actually specific to the module, such as:

the module and exports objects can be used to define what's accessible by the file bringing in the module

convenience variables: __filename and __dirname, the module's absolute filename and path


****** https://cs.nyu.edu/courses/spring22/CSCI-UA.0467-001/_site/slides/js/js-node-npm-debug-git.html#/23 *******

-------------------> Go over this tomorrow 3/2/22  <-----------------------------


*/



/* Using exports */
/* Create all of your functions …
Then, at the end, assign module.exports to an object literal containing all of the functions that you want to export */

// function repeat(ele, n) {
//     // implementation
// } 
    
// function generateBoard(rows, cols, initialValue) {
//     // implementation
// } 

// // ...

// module.exports = {
//     repeat: repeat,
//     generateBoard: generateBoard,
//     // ...
// }

// // showing what's in exports
// console.log(exports);
// // adding a property to exports
// exports.foo = 'bar, baz';
// console.log(exports);