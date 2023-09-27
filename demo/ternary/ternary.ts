/* eslint-disable */
import { strict as assert } from "assert";

// 'ternary' is a condensed if..else statement that can fit on a
// single line.
const age = 18;
const msg = age > 18 ? "allow" : "deny";
assert.equal(msg, "purchase denied");

const a = 1;
const b = 2;
const c = 3;
const d = 4;
// Ternary becomes hard to read when chained. Don't do this:
const sample = a > 1 ? b > 2 : c > 3 ? d > 4 : true;
assert.equal(sample, true);
// Parentheses barely helps:
const withParens = a > 1 ? b > 2 : c > 3 ? d > 4 : true;
