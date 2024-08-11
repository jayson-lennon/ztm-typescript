// JavaScript
{
  // console.log("JavaScript");
  // function greetUsers(users) {
  //   users.forEach(user => {
  //     console.log(`Hello, ${user.name}!`);
  //   });
  // }
  //
  // function getAverageAge(users) {
  //   let totalAge = 0;
  //   users.forEach(user => {
  //     totalAge += user.age;
  //   });
  //   return totalAge / users.length;
  // }
  //
  // const users = [
  //   { name: "Alice", age: 25 },
  //   { name: "Bob", age: 30 },
  //   { name: "Charlie", age: 35 }
  // ];
  //
  // greetUsers(users);
  // console.log(`Average age: ${getAverageAge(users)}`);
}

// TypeScript
{
  console.log("\nTypeScript");

  // Create interface having the require fields for a `User`
  interface User {
    name: string;
    age: number;
  }

  // Apply type annotations in function signature.
  function greetUsers(users: User[]): void {
    users.forEach(user => {
      console.log(`Hello, ${user.name}!`);
    });
  }

  // Apply type annotations in function signature.
  function getAverageAge(users: User[]): number {
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
}
