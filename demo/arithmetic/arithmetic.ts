/* eslint-disable */
import { strict as assert } from "assert";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const add = 1 + 1; // 2
assert.equal(add, 2);

const subtract = 2 - 1; // 1
assert.equal(subtract, 1);

const multiply = 3 * 3; // 9
assert.equal(multiply, 9);

const divide = 8 / 2; // 4
assert.equal(divide, 4);

// You won't get a divide by zero error.
const infinity = 1 / 0; // Infinity
assert.equal(infinity, Infinity);

const notANumber = 0 / 0; // NaN
assert(isNaN(notANumber));

const remainder = 10 % 3; // 1
assert.equal(remainder, 1);

const negate = -remainder; // -1
assert.equal(negate, -1);

const exponent = 2 ** 3; // 8
assert.equal(exponent, 8);
