// You are tasked with creating a utility that processes an array of
// numbers to find specific values. The array represents scores from a game,
// and you need to manually iterate through the array to find the highest
// score, the lowest score, and calculate the total sum of the scores. You'll
// accomplish this using arrow functions.
//
// Requirements:
//
// - Use an arrow function to find the highest score
// - Use an arrow function to find the lowest score
// - Use an arrow function to calculate the sum of all scores
// - Print out the highest score, lowest score, and the total sum.

import { strict as assert } from "assert";

const scores: number[] = [15, 42, 23, 8, 37, 56, 14];

const findMaxScore = (arr: number[]): number => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const findMinScore = (arr: number[]): number => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const calculateTotalSum = (arr: number[]): number => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const maxScore = findMaxScore(scores);
const minScore = findMinScore(scores);
const totalSum = calculateTotalSum(scores);

console.log(`Max Score: ${maxScore}`);
console.log(`Min Score: ${minScore}`);
console.log(`Total Sum: ${totalSum}`);

// Test cases. Use these to check your work.
assert.equal(maxScore, 56);
assert.equal(minScore, 8);
assert.equal(totalSum, 195);
