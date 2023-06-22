// You are tasked with writing a program to calculate the total amount of time
// a user has spent on a web page. An array is provided containing data for
// each user and the duration of each visit in the `durations` array.
//
// Requirements:
// - Use the provided data to sum the values in the `durations` array for each
//   user
// - Take the sum and update the existing `users` array by setting the `total`
//   value to the calculated sum
// - Use at least 1 while loop in your code

import { strict as assert } from "assert";

const users = [
  { id: 1, durations: [30, 16, 9], total: 0 },
  { id: 2, durations: [12, 31, 35], total: 0 },
  { id: 3, durations: [10, 34, 36], total: 0 },
  { id: 4, durations: [45, 36, 14], total: 0 },
  { id: 5, durations: [22, 12, 24], total: 0 },
  { id: 6, durations: [19, 11, 33], total: 0 },
];

let i = 0;
while (i < users.length) {
  if (users[i].total === 0 && users[i].durations.length > 0) {
    let sum = 0;
    for (let s = 0; s < users[i].durations.length; s++) {
      sum += users[i].durations[s];
    }
    users[i].total = sum;
  }
  i += 1;
}

assert.deepStrictEqual(users, [
  { id: 1, durations: [30, 16, 9], total: 55 },
  { id: 2, durations: [12, 31, 35], total: 78 },
  { id: 3, durations: [10, 34, 36], total: 80 },
  { id: 4, durations: [45, 36, 14], total: 95 },
  { id: 5, durations: [22, 12, 24], total: 58 },
  { id: 6, durations: [19, 11, 33], total: 63 },
]);
