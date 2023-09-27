// Using functions and template literals, print out your first and last name.
//
// Requirements:

// - Use a single function to generate your first name

function printFirstName(firstName: string): string {
  return firstName;
}

// - Use a single function to generate your last name

function printLastName(lastName: string): string {
  return lastName;
}

// - Use a single function to generate your full name by using the other
//   functions

function generateFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}
// - Print out your full name using the functions

console.log(
  generateFullName(printFirstName("teh"), printLastName("conspirator"))
);
