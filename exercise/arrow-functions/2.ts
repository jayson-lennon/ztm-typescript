// You are developing a small statistics module that needs to calculate the
// average and median of an array of numbers. The array represents the scores
// of students in an exam. You will use arrow functions to find the average and
// median of these scores.
//
// Requirements:
// - Use an arrow function to calculate the average of the numbers in the array.
// - Use an arrow function to calculate the median of the numbers in the array.
// - The array may have an even or odd number of elements, so handle both cases for the median.
// - Print out the average and the median of the scores.

import { strict as assert } from "assert";

const scores: number[] = [85, 92, 88, 74, 91, 77, 89, 95];

const calculateAverage = (arr: number[]): number => {
  let sum = 0;
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const calculateMedian = (arr: number[]): number => {
  const sortedArr = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  } else {
    return sortedArr[mid];
  }
};

const average = calculateAverage(scores);
const median = calculateMedian(scores);

console.log(`Average: ${average}`);
console.log(`Median: ${median}`);

// Test cases. These will confirm if your answer is correct.
assert.equal(average, 86.375);
assert.equal(median, 88.5);


