/* eslint-disable */
import { strict as assert } from "assert";

// Boolean logic is a fundamental concept that involves evaluating true/false
// statements. It is a system of logical thought that uses true and false
// values to make deductions or draw conclusions. Boolean logic is used to
// express conditions and make decisions based on the truth or falsehood of
// these conditions.
const age = 18;
let canPurchase = age >= 18;
assert.equal(canPurchase, true)

const newAge = 14;
let notPurchase = newAge >= 18;
assert.equal(notPurchase, false)