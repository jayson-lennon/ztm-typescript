/* eslint-disable */
import { strict as assert } from "assert";

// Incrementing numbers is a common task to perform when writing programs. So
// common that there is an operator dedicated to just incrementing numbers.
// However, it does come with a few caveats to be aware of.

// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

let n = 1;

// Postfix
n++;
assert.equal(n, 2);

// Prefix 
++n;
assert.equal(n, 3);

let a = 5;
const k = a++;
assert.equal(k, 5);

let b = 5;
b += 5;
assert.equal(b, 10)