/* eslint-disable */
import { strict as assert } from "assert";

// Compound boolean expressions allow us to take multiple boolean expressions
// and operate on them together. This enables many data points to be evaluated
// in order to make a decision, instead of just relying on a single boolean.


// boolean AND
const age = 18;
const isTeenager = age >= 13 && age < 20;
assert.equal(isTeenager, true);

// boolean OR
const rating = 9;
const favoriteMovie = false;
const suggestMovie = rating > 8 || favoriteMovie; // true
assert.equal(suggestMovie, true);

// boolean NOT
const writing = true;
const reading = !writing;

// ; compound expression
const packageWeight = 30;
const packageLength = 50;
const feeExemption = false;
const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40);
assert.equal(extraFee, true);
