/* eslint-disable */

// Union types allows you to declare a variable or parameter that can hold
// multiple types of value and are declared using the pipe symbol (|) between
// the types. Untion types can be useful when you want a something to accept
// multiple types of input.

// We can use a bar to create a 'union type'. Union types
// can only be one of the options provided at any moment in time.
type Color = "red" | "green" | "blue";

// Won't work: 'RED' doesn't exist in Color.
// const r: Color = 'RED';  // ERROR: 'RED' not assignable to Color

// OK: 'red' exists in Color.
const r: Color = "red";

function setBgColor(c: Color) {
  // Switch on each color (this is called a "type guard"):
  switch (c) {
    case "red":
      break;
    case "green":
      break;
    case "blue":
      break;
  }
}

// Won't work because 'purple' is not in Color.
// setBgColor('purple'); // ERROR: 'purple' not assignable to Color

setBgColor("blue"); // OK

// We can use numbers as well:
type OneTwoThree = 1 | 2 | 3;

// We are unable to assign numbers to the union if it hasn't been
// specified:
// const four: OneTwoThree = 4;   // ERROR: 4 is not assignable to OneTwoThree

// We can also create union types from existing types:
type StrOrNum = string | number;

// Union types can be used as function parameters:
// function sample(data: string | number) {    // alternative signature
function sample(data: StrOrNum) {
  // We didn't check the type of data coming in to the function, so
  // this is an error. Multiplication is defined for numbers, but not
  // strings. This won't work:
  // const double = data * 2;  // ERROR: `data` cannot be multiplied by 2

  // We can use the `typeof` keyword to check the type. Note that `typeof`
  // only works for primitive types (strings, numbers, boolean, etc).
  if (typeof data === "string") {
    // Once we enter this block, TypeScript treats `data` as a string.
    // String methods can be used on it now.
    console.log(`Message: ${data.toUpperCase()}`);
  } else if (typeof data === "number") {
    // Once we enter this block, TypeScript treats `data` as a number.
    // It is now possible to perform addition with the data.
    console.log(`Total: ${8 + data}`);
  }
}

// Both are valid because the function parameters allow for
// either a string or a number.
sample("hello");
sample(12);

// It is also possible to return union types. This function will return
// either a string or undefined:
function maybeSayHi(): string | undefined {
  return undefined;
}
