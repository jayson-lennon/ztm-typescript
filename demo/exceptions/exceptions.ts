/* eslint-disable */

// Exceptions are a way to handle errors and unexpected behavior in your code.
// When an exception occurs, it interrupts the normal flow of the program and
// jumps to a predefined error-handling routine. Exceptions can be used to
// catch and handle errors in a way that doesn't crash the program or cause
// unexpected behavior. Exceptions are thrown using the `throw` keyword and
// caught using the `try...catch` statement.

function divide(lhs: number, rhs: number): number {
  if (rhs === 0) {
    // We use the `throw` keyword to 'throw' an exception.
    // It must be 'caught' using the `catch` keyword somewhere
    // in the program, otherwise the program will terminate.
    throw new Error("unable to divide by zero");
  }
  return lhs / rhs;
}

// We call the function with a value that will cause an exception
// to be thrown. Since this isn't in a `try` block, the program
// will terminate:
// const num = divide(10, 0);   // UNCOMMENT TO CRASH

// Wrapping in a `try` block allows the program to continue if
// an exception occurs:
try {
  // Code in the `try` block will execute until either:
  // 1. the end of the block is reached
  // 2. an exception is thrown
  const num = divide(10, 0);
} catch (e) {
  // Code in the `catch` block only executes when the code in the
  // `try` block throws an exception. We can access the thrown
  // error with the `e` variable (or any name we give it).
  console.log(`an error occurred: ${e}`);
  console.log("try a different number next time");
} finally {
  // a `finally` block always executes.
  console.log("this block will execute no matter what");
}

// An error can be re-thrown if needed. This is useful if you do not intend
// to handle the error. Re-throwing allows a different part of the code to
// handle it.
function div(lhs: number, rhs: number) {
  try {
    const answer = divide(lhs, rhs);
  } catch (e) {
    // Display an error message indicating that an error occurred.
    console.log("division by zero error");
    // Re-throw the error, allowing a different part of the program
    // to handle it.
    throw e;
  }
}

// This will display an error message. Since there is no additional
// `try` block to handle the re-thrown error, the program will crash.
// const divError = div(10, 0);   // UNCOMMENT TO CRASH

// Now we run the function in a `try` block. The program will end
// properly with a message.
try {
  const answer = div(10, 0);
} catch (e) {
  console.log(`looks like an error occurred: ${e}`);
}

// Throwing exceptions is _not_ a method of control flow. It is only for
// _exceptional_ circumstances. Code within a try/catch block can run
// anywhere from 10x-25x slower. It also makes code more difficult to
// work with because thrown exceptions aren't encoded into the type system,
// so there is no way to know if a function may throw an exception.
