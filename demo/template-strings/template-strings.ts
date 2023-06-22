/* eslint-disable */
import { strict as assert } from "assert";

// Template literals allow us to substitute variables into a string.
// This makes it easy to display customized messages.

function greet(msg) {
  // We use backticks (``) to surround a template literal.
  // The variable we include is surrounded with ${}.
  console.log(`hello ${msg}`);
  // We don't use `return` with this function, because there is no
  // data to send back to the caller.
}

greet("TypeScript");

// We can also use expressions in the template literal.
const kids = 2;
const adults = 4;
// Try to keep the expression short so it's easy to read the string.
const totalPeople = `There are ${kids + adults} people`;

// Template literals can include other strings created
// with template literals:
console.log(`${totalPeople} to seat at the restaurant.`);
