/* eslint-disable */
import { strict as assert } from "assert";

const numbers: number[] = [1, 2, 3];

let letters: string[] = ["a", "b", "c"];

// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'
// letters.push(1);

function incrementNumbers(numbers: number[]): number[] {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 1;
  }
  return numbers;
  // alternate
  // return numbers.map(number => number + 1);
}

const input = [1, 2, 3];
const result = incrementNumbers(input);
console.log(result); // [2, 3, 4]

