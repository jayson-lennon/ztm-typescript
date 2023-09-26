/* eslint-disable */
import { strict as assert } from "assert";

// Functions are an essential component of programming that help organize code
// and make it more modular. A function is a block of code that can be called
// multiple times throughout a program with different inputs, allowing you to
// reuse code and save time. Functions can perform specific tasks or return
// values, and they can be used to break down complex problems into smaller,
// more manageable pieces. By using functions, you can reduce redundancy,
// improve code readability, and make it easier to maintain and update your
// code.

// Functions must have a name and body.
// They can optionally have parameters. This function has two parameters:
// `lhs` and `rhs`.
function sum(lhs, rhs) {
  // The function body returns the result of adding `lhs` and `rhs`.
  // We don't know what `lhs` or `rhs` are at the moment. When the
  // program runs, these will be replaced with numbers that are
  // provided to the function.
  return lhs + rhs;
}

function minus(lhs, rhs) {
  return lhs - rhs;
}

// It's helpful to see the result of our functions. We can use the
// `log` function to display data to the console:
console.log("hello"); // displays "hello" in the terminal or web console

// This is called 'dot notation' and allows us to access the `log`
// function on a piece of data called `console`. Calling a function
// using dot notation is the same as when we called the `sum` and
// `minus` functions, except we now have a name and a dot. Later in
// the course we will be creating functions that can be used with
// the dot operator. For now, we will only be using what is already
// provided to us from various environments.

// We 'call' functions by providing the name of the function and
// arguments (if needed):
const four = sum(2, 2);
assert.equal(four, 4);

// We can also use variables as arguments to functions:
const five = sum(four, 1);
assert.equal(five, 5);

// We can nest function calls in arguments:
const ten = sum(sum(2, 3), 5);
assert.equal(ten, 10);
const twenty = sum(sum(5, 5), sum(5, 5));
assert.equal(twenty, 20);

// Avoid nesting function calls too many times because it becomes
// difficult to understand:
const twentyTwo = sum(sum(1, 1), sum(minus(30, 11), 1));
assert.equal(twentyTwo, 22);

{
  // Do this instead:
  const two = sum(1, 1);
  assert.equal(two, 2);
  // Since the return value from a function can be used as part of an
  // expression, we can use arithmetic with it:
  const twenty = minus(30, 11) + 1;
  assert.equal(twenty, 20);
  const twentyTwo = sum(two, twenty);
  assert.equal(twentyTwo, 22);

  // Arguments to functions are also expressions, so we can do this
  // as well:
  const twentyOne = sum(two, twenty - 1);
  assert.equal(twentyOne, 21);

  // Function calls ultimately resolve to a discrete value, so they
  // can be used anywhere in an expression:
  const zero = sum(10, 10) - sum(15, 5);
  assert.equal(zero, 0);
}
