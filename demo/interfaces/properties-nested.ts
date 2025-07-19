/* eslint-disable */
import { strict as assert } from "assert";

// Define a nested interface for an address
interface Address {
  street: string;
  city: string;
}

// Interface that includes the nested type
interface User {
  name: string;
  age: number;
  address: Address; // Use of nested interface
}

// Create user with a nested object
const userWithAddress: User = {
  name: "David",
  age: 28,
  address: {
    street: "123 Main St",
    city: "New York"
  }
};

console.log(userWithAddress);
// `{ name: 'David', age: 28, address: { street: '123 Main St', city: 'New York' } }`
