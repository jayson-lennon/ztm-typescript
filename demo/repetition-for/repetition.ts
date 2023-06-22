/* eslint-disable */
// The `for` loop consists of three expressions separated by semicolons,
// followed by curly braces where the loop body is placed.
//
// for (A;B;C) { }
//
// A: This is evaluated one time when the `for` loop is first encountered.
//    It is typically used to create a loop counter variable.
// B: A boolean expression which is checked _before_ the loop executes
//    the next iteration. This is used to determine whether the loop
//    should continue.
// C: An expression that is evaluated _after_ the loop body executes, on each
//    iteration. It is normally used to increment the loop counter created
//    in (A).
//

// A basic example that display numbers 1 through 5:
for (let i = 1; i <= 5; i++) {
  console.log(`${i}`);
}

// Decrement is also fine:
for (let i = 5; i > 0; i--) {
  console.log(`${i}`);
}

// If the loop needs to be terminated early, it can be done with the
// `break` keyword. The loop body still executes up until the `break`
// keyword. So you can choose whether some or none of the body executes.
for (let i = 1; i < 50000; i++) {
  console.log(`${i}`);
  if (i === 3) {
    // use the `break` keyword to exit the loop
    break;
  }
}

// An iteration can be skipped using `continue`. Code within the loop
// body will still execute, but only up the the `continue` keyword. So
// you can choose whether some or none of the body executes.
for (let i = 1; i < 20; i++) {
  if (i % 5 === 0) {
    // skip iterations where `i` is divisible by 5
    continue;
  }
  console.log(`${i}`);
}

// We can use loops to access all elements within an array.
//
// This isn't the recommended to iterate through an array, but it is simple
// and you will very likely encounter it when working on different codebases.
//
// The `.length` field on arrays tells us how many elements are available.
// We can use this to stop the loop once we get to the end of the array.
// Remember that arrays start at index 0. So if there are three elements,
// using `.length` will give us 3, but the highest index is 2. Therefore,
// we want to loop while the counter is less than (and not equal) to the
// length.
const letters: string[] = ["a", "b", "c"];
for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}
