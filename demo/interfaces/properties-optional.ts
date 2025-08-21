/* eslint-disable */
import { strict as assert } from "assert";

// Define an interface with optional fields
interface UserProfile {
  username: string;
  email?: string; // Optional field
}

// Create a user without specifying email
const profile1: UserProfile = {
  username: "bob"
};

console.log(profile1); // `{ username: 'bob' }`

// Create another user with an email
const profile2: UserProfile = {
  username: "carol",
  email: "carol@example.com"
};

console.log(profile2); // `{ username: 'carol', email: 'carol@example.com' }`

// Interfaces can be used as function parameters:
function logUser(user: UserProfile) {
  const email = user.email !== undefined ? user.email : "not provided";
  console.log(`${user.username} <${email}>`);
}

function logUser2(user: UserProfile) {
  const email = user.email ?? "not provided";
  console.log(`${user.username} <${email}>`);
}

logUser2(profile1);  // `bob <not provided>`
logUser2(profile2);  // `carol <carol@example.com>`
