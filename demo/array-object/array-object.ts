/* eslint-disable */


// Array of user objects
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" }
];

// Access the first user's name
console.log(users[0].name); // Output: "Alice"

// Add a new user to the array
users.push({ id: 3, name: "Charlie", email: "charlie@example.com" });
console.log(users);

/*
Output:
[
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
]
*/

// Loop through the users array
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  console.log(`User ID: ${user.id}, Name: ${user.name}`);
}

// Update each user
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  // Update the email with a new value for demonstration
  user.email = `updated-${user.email}`;
}

console.log(users);

