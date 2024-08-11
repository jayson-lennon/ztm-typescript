// JavaScript

function greetUsers(users) {
  users.forEach(user => {
    console.log(`Hello, ${user.name}!`);
  });
}

function getAverageAge(users) {
  let totalAge = 0;
  users.forEach(user => {
    totalAge += user.age;
  });
  return totalAge / users.length;
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

greetUsers(users);
console.log(`Average age: ${getAverageAge(users)}`);
