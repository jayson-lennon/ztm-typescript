// You are working on a program to classify certain weights into a weight class
// for competition. Certain weight classes are allowed to compete against
// similar weight classes. There is a tiered system in place and when a
// competitor reaches the next tier, then they get placed in the next weight
// class.
//
// Write a program using a `switch` statement that fulfills the following:
// - When the weight class is 1, 2, or 3, print the text "light weight class"
// - When the weight class is 4, 5, or 6, print the text "medium weight class"
// - When the weight class is 7, 8, 9, or 10, print the text "heavy weight
//   class"
//
// Modify the existing `weightClass` variable to confirm that your code works
// as expected.

import { strict as assert } from "assert";

const weightClass = parseInt("3");

switch (weightClass) {
  case 1:
  case 2:
  case 3:
    console.log("light weight class");
    break;
  case 4:
  case 5:
  case 6:
    console.log("medium weight class");
    break;
  case 7:
  case 8:
  case 9:
  case 10:
    console.log("heavy weight class");
    break;
}
