// Convert the JavaScript program to a TypeScript program. See code comments
// and assertions to help determine how the code is supposed to behave. For
// more complex scenarios, consider using `console.log` to see the shape of an
// object. This will help when creating interfaces and type aliases.
//
// Both the JavaScript and TypeScript code are shown here for comparison. In
// practice you would not duplicate the code.

import { strict as assert } from "assert";

function add(a, b) {
  return a + b;
}

console.log(add(5, 3));
assert.equal(add(1, 2), 3);

// These don't crash, but they do not produce expected results.
console.log(add("5", "3"));
console.log(add(null, NaN));
console.log(add(0, "1"));
console.log(add("1", 0));
console.log(add({}, 5));
console.log(add(2, [3]));
console.log(add(2, () => 3));
