// Convert the JavaScript program to a TypeScript program. See code comments
// and assertions to help determine how the code is supposed to behave. For
// more complex scenarios, consider using `console.log` to see the shape of an
// object. This will help when creating interfaces and type aliases.
//
// Both the JavaScript and TypeScript code are shown here for comparison. In
// practice you would not duplicate the code.

import { strict as assert } from "assert";

function calculate(operation, a, b) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "subtract") {
    return a - b;
  } else if (operation === "multiply") {
    return a * b;
  } else if (operation === "divide") {
    return a / b;
  } else {
    return "Invalid operation";
  }
}

console.log(calculate("add", 10, 5));        // Outputs: 15
console.log(calculate("divide", 10, 2));     // Outputs: 5
console.log(calculate("subtract", 10, 2));   // Outputs: 8

console.log(calculate("whoops", 1, 2));      // Outputs: "Invalid operation"
console.log(calculate("add", 2, "10"));      // Outputs: "210" (unexpected behavior)

assert.equal(calculate("add", 10, 5), 15)
assert.equal(calculate("divide", 10, 2), 5)
assert.equal(calculate("subtract", 10, 2), 8)

