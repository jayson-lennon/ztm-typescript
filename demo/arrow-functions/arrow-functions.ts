/* eslint-disable */

// Arrow functions provide a concise syntax for defining functions. They are
// defined using a fat arrow (=>) and can be used in place of traditional
// function expressions. Arrow functions automatically bind the 'this' keyword
// to the parent context, making them useful in event handlers and callback
// functions. They also support implicit return statements for one-liner
// functions, which makes the code more readable.
// 
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions


function funcSum(lhs: number, rhs:number):number {
	return lhs+rhs;
}

// function expression
const sum = function (lhs:number, rhs:number):number {
	return lhs+rhs;
} 

// arrow function
const arrowSum = (lhs: number, rhs: number) => {
	return lhs+rhs;
}

function calculate( 
	fn: (lhs:number, rhs:number) => number, 
	lhs: number, 
	rhs: number) {
	const result = fn(5,6);
}
calculate(arrowSum, 5, 6);

// to optimize the function's signature and make it a bit simpler,
// we can define the parameter function as type

type calculationFn = (lhs: number, rhs: number) => number;

function calculateN(
	fn: calculationFn,
	lhs: number,
	rhs: number) {
		const result = fn(lhs, rhs)
	}