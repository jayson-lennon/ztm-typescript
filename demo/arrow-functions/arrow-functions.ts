/* eslint-disable */

// Arrow functions provide a concise syntax for defining functions. They are
// defined using a fat arrow (=>) and can be used in place of traditional
// function expressions. Arrow functions automatically bind the 'this' keyword
// to the parent context, making them useful in event handlers and callback
// functions. They also support implicit return statements for one-liner
// functions, which makes the code more readable.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

{
  function double(x) {
    return x * x;
  }
}

{
  // Create a function expression / anonymous function:
  const double = function (x) {
    return x * x;
  };

  const four = double(2);
  console.log(four);
}

{
  // The same as above, using arrow function syntax:
  const double = (x) => x * x;

  // Calling an arrow function is the same as calling a regular function:
  const nine = double(3);
  console.log(nine);


}

