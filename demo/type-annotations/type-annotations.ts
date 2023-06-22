/* eslint-disable */
import { strict as assert } from "assert";

// Type annotations are used to provide type information for variables,
// functions, and other data structures in a program. By adding type
// annotations, you can specify the expected types of data and prevent errors
// that could occur from using the wrong type. This allows for better code
// reliability, maintainability, and readability.

const courseName: string = "typescript";
const amount: number = 10;
const fractionalAmount: number = 10.5;
const hexByte: number = 0xff;
const bigInteger: bigint = 9000n;

const yes: boolean = true;
const nope: boolean = false;

const missing: undefined = undefined;
const empty: null = null;

let someNum: number = 0;
someNum = 1;

let hello: string;
// cannot use `hello` until we assign it
// console.log(hello);  // ERROR: `hello` used before assigned
hello = "hi";
console.log(hello); // OK: `hello` is now assigned

function sum(lhs: number, rhs: number): number {
  // Most of the time, we don't need type annotations on declarations.
  // We know from the surrounding information that `total` will be a
  // number. However, if adding the annotation makes things clearer,
  // feel free to do so.
  const total = lhs + rhs;
  return total;
}

// Type annotation optional: we already know `sum` returns a number.
const four = sum(2, 2);
assert.equal(four, 4);
