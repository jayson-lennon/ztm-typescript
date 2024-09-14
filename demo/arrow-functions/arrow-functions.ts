/* eslint-disable */

// Arrow functions provide a concise syntax for defining functions. They are
// defined using a fat arrow (=>) and can be used in place of traditional
// function expressions. Arrow functions automatically bind the 'this' keyword
// to the parent context, making them useful in event handlers and callback
// functions. They also support implicit return statements for one-liner
// functions, which makes the code more readable.

// Create a function expression / anonymous function:
const sum = function (lhs: number, rhs: number): number {
  return lhs + rhs;
};

// The same as above, using arrow function syntax:
const arrowSum = (lhs: number, rhs: number): number => {
  return lhs + rhs;
};

// Both functions can be called the same way:
const two = sum(1, 1);
const four = arrowSum(2, 2);

// This is useful for defining functions within functions.
//
// You should prefer to always use arrow functions in all contexts
// _except_ when you define a "regular" function:
function regularFunction() {}

// Everywhere else should use arrow functions:
const arrowFunction = () => {};

// We can also use function expressions to call functions with functions.

// Type alias for a function which can perform basic calculations.
// Notice there is no function body. It will be defined later.
type calculationFn = (lhs: number, rhs: number) => number;

// `calculate` function accepts the above type alias along with two numbers.
function calculate(fn: calculationFn, lhs: number, rhs: number): number {
  // `fn` is a function (or function expression) with signature
  // `(number, number): number`. This allows us to forward the `lhs` and `rhs`
  // passed to `calculate` to the `calculationFn`.
  //
  // Call like we would any other function:
  return fn(lhs, rhs);
}

// We use the `arrowSum` function expression that we created earlier:
const ten = calculate(arrowSum, 5, 5);

// We can also use a regular function. Just like a function expression,
// the function signature must match in order to use it.
const twenty = calculate(sum, ten, ten);

// Add more functionality with a function expression to calculate
// the remainder of dividing two numbers:
const remainder = (lhs: number, rhs: number): number => {
  return lhs % rhs;
};

// Use `remainder` as we did `sum`:
const one = calculate(remainder, 4, 3);

