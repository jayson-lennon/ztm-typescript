/* eslint-disable */
import { strict as assert } from "assert";

const myName = "Njordr";
const amount: number = 2 + 2;
//template literals
const hello: string = `Hello ${myName}`;
//const powerLevel: bigint = 9000n + 1n; 

const powerLevel = BigInt(9000) + BigInt(1);

const yes: boolean = true; 

function sum(lhs, rhs) {
    const total = lhs + rhs;
    return total;
}

const one = sum(1,0);
console.log(one);

const two = sum(1, "one");
console.log(two);

// Type annotations are used to provide type information for variables,
// functions, and other data structures in a program. By adding type
// annotations, you can specify the expected types of data and prevent errors
// that could occur from using the wrong type. This allows for better code
// reliability, maintainability, and readability.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables
