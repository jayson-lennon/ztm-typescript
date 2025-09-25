/* eslint-disable */
import { strict as assert } from "assert";

// You are asked to write a function that takes two numbers as arguments and
// returns their sum. Your task is to rewrite the following regular function
// using an arrow function syntax.

// Rewrite this function using arrow function syntax.
function add(a, b) {
  return a + b;
}

const solution = (a, b) => a + b;

assert.equal(add(3, 5), 8);
assert.equal(add(-2, 7), 5);
console.log("exercise complete!");

