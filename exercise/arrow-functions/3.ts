/* eslint-disable */
import { strict as assert } from "assert";

// Write an arrow function that takes a person's name and age, then returns a
// string using a template literal. The returned string should look like this:
// "My name is Alice and I am 25 years old."

// Rewrite this function using arrow function syntax.
function getIntro(name, age) {
  return `My name is ${name} and I am ${age} years old.`;
}

const solution = (name, age) => `My name is ${name} and I am ${age} years old.`;

assert.equal(getIntro("Alice", 25), "My name is Alice and I am 25 years old.");
console.log("exercise complete!");

