// You are developing a system that processes user inputs, where each input
// could be a string or a number. Implement a function that uses type
// predicates to determine the type of input and perform type-specific
// processing.
//
// Requirements:
// - Create a function called `processInput` that:
//   - Takes input, which can be either a string or a number.
//   - Uses a type predicate to check if the input is a string or a number.
//   - For a string, print "Processing string: " followed by the string.
//   - For a number, print "Processing number: " followed by the number.
//   - Ensure the type-specific processing is handled correctly.

// Function to process input using type predicates
function processInput(input: string | number): void {
  if (isString(input)) {
    console.log(`Processing string: ${input}`);
  } else if (isNumber(input)) {
    console.log(`Processing number: ${input}`);
  }
}

// Type predicate function to check if a value is a string
function isString(value: string | number): value is string {
  return typeof value === 'string';
}

// Type predicate function to check if a value is a number
function isNumber(value: string | number): value is number {
  return typeof value === 'number';
}

// Test cases
processInput("Hello, world!");  // Output: Processing string: Hello, world!
processInput(42);               // Output: Processing number: 42
processInput("");               // Output: Processing string: 
processInput(0);                // Output: Processing number: 0

