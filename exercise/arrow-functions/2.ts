/* eslint-disable */
import { strict as assert } from "assert";

// You are asked to write a function that returns a greeting based on whether
// the time of day is "morning", "afternoon", or any other value. The function
// should be written as an arrow function and use either if-else or ternary
// operators.

// Rewrite this function using arrow function syntax.
function greet(timeOfDay) {
  if (timeOfDay === "morning") return "Good morning!";
  else if (timeOfDay === "afternoon") return "Good afternoon!";
  else return "Hello there!";
}

const solution = (timeOfDay) => {
  if (timeOfDay === "morning") return "Good morning!";
  else if (timeOfDay === "afternoon") return "Good afternoon!";
  else return "Hello there!";
}

assert.equal(greet("morning"), "Good morning!");
assert.equal(greet("afternoon"), "Good afternoon!");
assert.equal(greet("evening"), "Hello there!");
console.log("exercise complete!");
