/* eslint-disable */
import { strict as assert } from "assert";

// String Replacement - Generate an Email Message with Placeholders
//
// Problem: A developer is building an email system that replaces placeholders
// in a template with user data (e.g., name and order ID) for personalized
// messages.
//
// Example:
//   Given template = "Hello [name], your order [orderID] is ready.",
//   where name = "Alice", and orderId = "12345",
//   return "Hello Alice, your order 12345 is ready.".

function generateEmailMessage(template, name, orderId) {
  return template.replace('[name]', name).replace('[orderID]', orderId);
}

// Test Cases
assert.strictEqual(generateEmailMessage("Hello [name], your order [orderID] is ready.", "Alice", "12345"),
  "Hello Alice, your order 12345 is ready.");
assert.strictEqual(generateEmailMessage("[name], your [orderID] has been shipped.", "Bob", "67890"),
  "Bob, your 67890 has been shipped.");
console.log("exercise complete!");

