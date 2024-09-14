// You are building a simple menu system for a text-based application.
// Implement a function that uses a switch statement to handle different menu
// options based on user input.
//
// Requirements:
// - Create a function called `handleMenuSelection` that:
//   - Takes a number representing the user's menu option choice.
//   - Uses a switch statement to handle the following menu options:
//     - 1: Print "Option 1 selected."
//     - 2: Print "Option 2 selected."
//     - 3: Print "Option 3 selected."
//     - 4: Print "Option 4 selected."
// - Ensure the function handles invalid options gracefully by printing
//   "Invalid option selected" if any number other than 1, 2, 3, 4 are selected

// Function to handle menu selections using a switch statement
function handleMenuSelection(option: number): void {
  switch (option) {
    case 1:
      console.log("Option 1 selected.");
      break;
    case 2:
      console.log("Option 2 selected.");
      break;
    case 3:
      console.log("Option 3 selected.");
      break;
    case 4:
      console.log("Option 4 selected.");
      break;
    default:
      console.log("Invalid option selected.");
      break;
  }
}

// Test cases
handleMenuSelection(1);  // Output: Option 1 selected.
handleMenuSelection(2);  // Output: Option 2 selected.
handleMenuSelection(3);  // Output: Option 3 selected.
handleMenuSelection(4);  // Output: Option 4 selected.
handleMenuSelection(5);  // Output: Invalid option selected.

