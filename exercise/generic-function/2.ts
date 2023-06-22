// Write a generic function that can calculate the average of numbers in an
// array. The function should operate on types that are compatible with
// numbers, but should not work on non-numeric types, such as strings or
// booleans.
//
// To calculate an average:
// 1. Sum the numbers in the array
// 2. Divide the sum by the number of elements
//
// To confirm that your program runs as expected:
// 1. Run your function on the given `numbers` array
// 2. Assert that the average is 3

import { strict as assert } from "assert";

function calculateAverage<T extends number>(arr: T[]): number {
  const sum = arr.reduce((total, current) => total + current, 0);
  return sum / arr.length;
}

const numbers: number[] = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);

assert.equal(average, 3);
