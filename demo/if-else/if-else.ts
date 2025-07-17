/* eslint-disable */
import { strict as assert } from "assert";

// Control flow is the order in which statements are executed in a program. It
// allows programmers to control the flow of their code based on certain
// conditions or events. Control flow structures include conditional
// statements, loops, and function calls, which allow for branching and
// repetition of code.

const answer = 2 + 2;
assert.equal(answer, 4);

if (answer > 4) {
  console.log(`answer is greater than four`);
}

if (answer === 4) {
  console.log(`answer is 4`);
} else {
  console.log(`answer is not 4`);
}

if (answer < 4) {
  console.log(`answer is less than 4`);
} else if (answer > 4) {
  console.log(`answer is greater than 4`);
} else {
  console.log(`answer is 4`);
}

const age = 6;
const likesHavingFun = true;

if (age <= 12 && likesHavingFun) {
  // play at the park
} else if (age > 12 && !likesHavingFun) {
  // be bored
} else {
  // work on hobbies
}

