// Using the provided scores in the array, calculate the average score.
//
// To calculate an average:
// 1. Sum the numbers in the array
// 2. Divide the sum by the number of elements
//
// To confirm that your code works as expected, perform the following steps:
// 1. Calculate the average of the `scores` array
// 2. Assert that the average is 85
// 3. Push 92 onto the `scores` array
// 4. Calculate the average again
// 5. Assert that the average is now 86
import { strict as assert } from "assert";

const scores = [90, 77, 83, 96, 76, 88];

const averaging = (array: number[]): number => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("sum", sum);

  return sum / array.length;
};

let average: number = averaging(scores);
console.log("average", average);
assert.equal(average, 85);

scores.push(92);

average = averaging(scores);
console.log("average", average);
assert.equal(average, 86);
