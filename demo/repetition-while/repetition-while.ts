/* eslint-disable */
// A `while` loop executes the body 'while' some boolean expression is `true`.
// It is your responsibility to manage when and how the loop exits.

// Basic `while` loop to count from 1 to 5:
let i = 1; // create our loop counter
while (i <= 5) {
  console.log(`${i}`);
  i += 1; // increment the counter
}

i = 1;
while (i <= 5) {
  console.log(`${i}`);
  // Just like a `for` loop, we can `break` or `continue` whenever we want.
  break;
}

// `true` is always `true`, so you can create an infinite loop like this:
while (true) {
  if (i >= 1) {
    // Remember to `break` at some point, otherwise the program will never end.
    break;
  }
}

