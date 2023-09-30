/* eslint-disable */

// Tests provide ways to confirm that your code works as intended. To create
// tests you'll need to make a file having a filename of the file you want to
// test, followed by `.test.ts`. For this demo, the test filename should be
// `strings.test.ts`.
//
// Useful links:
// https://jestjs.io/

// A basic function that concatenates two strings.
export function concat(a: string, b: string): string {
  return `${a}${b}`;
}

export function div(lhs: number, rhs: number): number {
  if (rhs === 0) {
    throw new Error("Cannot divide by zero");
  } else {
    return lhs / rhs;
  }
}

// An asynchronus function that resolves.
export function slowString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("slowString");
      resolve("sample");
    }, 200);
  });
}

// slowString();

// An asynchronus function that fails.
export function failedString() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("failledString");
      reject("whoops");
    }, 1);
  });
}

// failedString();
