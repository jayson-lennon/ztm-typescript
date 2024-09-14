// You are developing a system to manage user notifications in a web
// application. Notifications can be of different types, such as a message, an
// error, or a success notification. Each notification type requires different
// handling and contains different information. You'll use discriminated unions
// to model the different notification types and handle them appropriately.
//
// Requirements:
// - Define a discriminated union `Notification` that has three variants:
//   1. `MessageNotification`: Represents a standard message notification with
//      the following properties:
//      - type: A string literal "message".
//      - text: A string containing the message content.
//   2. `ErrorNotification`: Represents an error notification with the following
//      properties:
//      - type: A string literal "error".
//      - code: A number representing the error code.
//      - message: A string containing the error message.
//   3. `SuccessNotification`: Represents a success notification with the
//      following properties:
//      - type: A string literal "success".
//      - text: A string containing the success message.
// - Create a function `getNotification` that takes a `Notification` as a
//   parameter and returns a `string` with an appropriate message based on the
//   type of the notification.
//   - Format the message using the format provided for each test case.
// - Use a `switch` statement to handle each variant of the `Notification` type
//   within the `getNotification` function.

import { strict as assert } from "assert";

interface MessageNotification {
  type: "message";
  text: string;
}

interface ErrorNotification {
  type: "error";
  code: number;
  message: string;
}

interface SuccessNotification {
  type: "success";
  text: string;
}

type Notification = MessageNotification | ErrorNotification | SuccessNotification;

function getNotification(notification: Notification): string {
  switch (notification.type) {
    case "message":
      return `Message: ${notification.text}`;
    case "error":
      return `Error ${notification.code}: ${notification.message}`;
    case "success":
      return `Success: ${notification.text}`;
  }
}

// Test cases
//
// Format:
//   "Message: <text>"
//
// Example:
//   "Message: You have a new message
const messageNotification: MessageNotification = {
  type: "message",
  text: "You have a new message."
};

// Format:
//   "Error <code>: <message>"
//
// Example:
//   "Error 404: Page not found."
const errorNotification: ErrorNotification = {
  type: "error",
  code: 404,
  message: "Page not found."
};

// Format:
//   "Success: <text>"
//
// Example:
//   "Success: Operation completed successfully."
const successNotification: SuccessNotification = {
  type: "success",
  text: "Operation completed successfully."
};

const case1 = getNotification(messageNotification); // Message: You have a new message.
const case2 = getNotification(errorNotification); // Error 404: Page not found.
const case3 = getNotification(successNotification); // Success: Operation completed successfully.

assert.equal(case1, "Message: You have a new message.");
assert.equal(case2, "Error 404: Page not found.");
assert.equal(case3, "Success: Operation completed successfully.");

