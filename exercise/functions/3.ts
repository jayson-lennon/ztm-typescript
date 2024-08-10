// You are developing a application to manage basic mathematical operations on
// three numbers. The application needs to calculate the average of three
// numbers and then determine if the average is above a certain threshold.
//
// Requirements:
// - Define a function named `calculateAverage` that takes three numbers and
//   returns their average.
//   - This function should call a helper function named `sum` to calculate the
//     total sum of the three numbers.
//   - The average is the calculated by adding all input values together and
//     then dividing it by the number of input values
// - Define a function named `isAboveThreshold` that takes the average and a
//   threshold value and returns `true` if the average is greater than the
//   threshold, and `false` otherwise.
// - Use these functions to perform some calculations and print whether the
//   average is above a given threshold.

/* eslint-disable */

import { strict as assert } from "assert";


//
// Test cases
assert.equal(calculateAverage(10, 20, 30), 20);
assert.equal(isAboveThreshold(20, 15), true);

