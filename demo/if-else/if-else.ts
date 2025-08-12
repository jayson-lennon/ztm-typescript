/* eslint-disable */
import { strict as assert } from "assert";

// Control flow is the order in which statements are executed in a program. It
// allows programmers to control the flow of their code based on certain
// conditions or events.

const age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not yet an adult.");
}

const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Your grade is: ${grade}`);

let isMember = true;
let hasPaidDues = false;

if (isMember && hasPaidDues) {
  console.log("You have full access to club amenities.");
} else {
  console.log("Your access is limited.");
}

let isStudent = false;
let hasCoupon = true;

if (isStudent || hasCoupon) {
  console.log("You are eligible for a discount.");
} else {
  console.log("No discount applies.");
}
