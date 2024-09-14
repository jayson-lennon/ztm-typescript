function greetUsers(users: User[]): void {
  users.forEach(user => {
    console.log(`Hello, ${user.name}!`);
  });
}

function getAverageAge(users: User[]): number {
  let totalAge = 0;
  users.forEach(user => {
    totalAge += user.age;
  });
  return totalAge / users.length;
}

interface User {
  name: string;
  age: number;
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

greetUsers(users);
console.log(`Average age: ${getAverageAge(users)}`);

