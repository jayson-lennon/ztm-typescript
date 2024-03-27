/* eslint-disable */
import { strict as assert } from "assert";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const add = 1 + 1;
assert.equal(add, 2);

const sub = 2 - 1;
assert.equal(sub, 1);

const mul = 3 * 3;
assert.equal(mul, 9);

const div = 3 / 2;
assert.equal(div, 1.5);

const inf = 1 / 0;
assert.equal(inf, Infinity);
