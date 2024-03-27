/* eslint-disable */
import { strict as assert } from "assert";

// Functions are an essential component of programming that help organize code
// and make it more modular. A function is a block of code that can be called
// multiple times throughout a program with different inputs, allowing you to
// reuse code and save time. Functions can perform specific tasks or return
// values, and they can be used to break down complex problems into smaller,
// more manageable pieces. By using functions, you can reduce redundancy,
// improve code readability, and make it easier to maintain and update your
// code.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/functions.html

function sayHello() {
    console.log("hello");
}

sayHello();

function sum(lhs, rhs) {
    return lhs + rhs;
}

let answer = sum(2, 3);
console.log("Answer 1 is ",answer);

let ans2 = sum(answer, 2);
console.log("Answer 2 is ",ans2);

let ans3 = sum(sum(1,1) , sum(2,3))
console.log("Answer 3 is ", ans3)