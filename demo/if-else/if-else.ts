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

{
  const hasTheSkills = true;
  const isTuesday = true;
  const hoursWorked = 9;
  const totalOvertime = 0.5;
  const holidaySeason = false;

  function approveWork() {
    // Extra long conditional is difficult to read.
    // Don't do something like this:
    if (
      (hasTheSkills && (isTuesday || (hoursWorked > 8 && totalOvertime < 1))) ||
      holidaySeason
    ) {
      // approve work
    } else {
      // go home
    }
  }

  // Instead of the above conditional, break it into
  // small chunks.
  function approveMoreWork() {
    if (!hasTheSkills) {
      // go home

      // Early return: if we don't have the skills we exit from the
      // function immediately. This helps simplify logic.
      return;
    }

    // We already have the skills at this point, so now we can move on
    // to the more complicated logic.
    const canWorkOvertime = hoursWorked > 8 && totalOvertime < 1;

    if (!canWorkOvertime) {
      // another early return
      return;
    }

    if (holidaySeason || isTuesday) {
      // approve work
    } else {
      // go home
    }
  }

  function approveEvenMoreWork() {
    const day = "tuesday";

    if (!hasTheSkills) {
      // go home
      return;
    }

    if (!hasOvertimeHours(hoursWorked, totalOvertime)) {
      // go home
      return;
    }

    if (!isBusyDay(day, holidaySeason)) {
      // go home
      return;
    }

    // monthly max

    // no late employees

    // approve work

  }

  function isBusyDay(day: string, holidaySeason: boolean): boolean {
    return holidaySeason || day === "tuesday";
  }

  function hasOvertimeHours(hoursWorked: number, totalOvertime: number): boolean {
    const hasHours = hoursWorked > 7 && totalOvertime < 2;
    return hasHours;

  }
}
