// Convert the JavaScript program to a TypeScript program. See code comments
// and assertions to help determine how the code is supposed to behave. For
// more complex scenarios, consider using `console.log` to see the shape of an
// object. This will help when creating interfaces and type aliases.
//
// Both the JavaScript and TypeScript code are shown here for comparison. In
// practice you would not duplicate the code.

import { strict as assert } from "assert";

// JavaScript
{
  console.log("JavaScript");
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  function add(a, b) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/restrict-plus-operands
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

}

// TypeScript
{
  console.log("\nTypeScript");

  // types added to function signature
  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(add(5, 3));
  assert.equal(add(1, 2), 3);

  // These are all now compiler errors. (Uncomment to see errors)
  // console.log(add("5", "3"));
  // console.log(add(null, NaN));
  // console.log(add(0, "1"));
  // console.log(add("1", 0));
  // console.log(add({}, 5));
  // console.log(add(2, [3]));
  // console.log(add(2, () => 3));
}
