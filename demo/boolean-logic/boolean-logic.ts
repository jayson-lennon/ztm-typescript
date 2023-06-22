/* eslint-disable */
import { strict as assert } from "assert";

// Boolean logic is a fundamental concept that involves evaluating true/false
// statements. It is a system of logical thought that uses true and false
// values to make deductions or draw conclusions. Boolean logic is used to
// express conditions and make decisions based on the truth or falsehood of
// these conditions.

// booleans are either `true` or `false`
const yup = true;
const nope = false;

// greater than / less than
let age = 18;
const canPurchase = age >= 18; // true
assert.equal(canPurchase, true);
const denyPurchase = age < 18; // false
assert.equal(denyPurchase, false);

// equal to
const two = 2;
const isThree = (1 + two) === 3;
assert.equal(isThree, true);

