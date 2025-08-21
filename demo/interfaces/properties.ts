/* eslint-disable */
import { strict as assert } from "assert";

{
  // JavaScript
  const alice = {
    name: "Alice",
    age: 30,
  };
  console.log(alice); // `{ name: 'Alice', age: 30 }`
}

//-----------------------------------------

{
  // TypeScript
  //
  // Define the interface
  interface Person {
    name: string;
    age: number;
  }

  // Create an object conforming to the interface
  const alice: Person = {
    name: "Alice",
    age: 30
  };

  console.log(alice); // `{ name: 'Alice', age: 30 }`


}
