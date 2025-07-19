/* eslint-disable */

// Arrow functions provide a concise syntax for defining functions. They are
// defined using a fat arrow (=>) and can be used in place of traditional
// function expressions. Arrow functions automatically bind the 'this' keyword
// to the parent context, making them useful in event handlers and callback
// functions. They also support implicit return statements for one-liner
// functions, which makes the code more readable.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Create a function expression / anonymous function:
const square = function (x) {
  return x * x;
};

const four = square(2);
console.log(four);

// The same as above, using arrow function syntax:
const arrowSquare = (x) => x * x;

// Calling an arrow function is the same as calling a regular function:
const nine = arrowSquare(3);
console.log(nine);

