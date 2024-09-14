// You are building a making application that helps determine whether a store
// is open or closed based on the current time. The application will also check
// if a user has sufficient funds to make a purchase.
//
// Requirements:
// - Use an if-else statement to determine if the store is open.
//   - The store is open between 9 AM and 9 PM.
//   - Use 24-hour clock for time. So 4AM will be `400` and 10PM will be `2200`
//   - If the store is open, print "Store is open". If the store is closed,
//     print "Store is closed".
// - Use another if-else statement to check if a user has enough money to make
//   a purchase.
//   - The user has enough money if their balance is greater than or equal to
//     the item price
//   - If the user has enough money to buy the item, print "Enough funds". If
//     not, print "Insufficient funds".
//
// Notes:
// - Optionally use functions
// - Change the initial constants to different values to check how your program
//   behaves.

/* eslint-disable */

// Change this to different values to check your program behavior.
const currentTime = 1000; // Example: 10 AM

// Check if the store is open
if (currentTime >= 900 && currentTime < 2100) {
  console.log("Store is open");
} else {
  console.log("Store is closed");
}

// Change these to different values to check your program behavior.
const userBalance = 50;
const itemPrice = 40;

// Check if the user has enough money to make a purchase
if (userBalance >= itemPrice) {
  console.log("Purchase successful");
} else {
  console.log("Insufficient funds");
}


