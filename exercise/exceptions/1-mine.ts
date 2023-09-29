// Your task is to create a class that only allows text input up to a certain
// length. This length-restricted class will be used to ensure that users do
// not enter too much information into an input field.
//
// Requirements:
// - Create a class containing a length-limited string
// - The class should not allow instantiation with strings greater than the
//   specified length
// - The class should allow setting the maximum string length
// - Throw an exception in the constructor of the class if the string is over
//   the maximum length

import { strict as assert } from "assert";

class Input {
  textInput: string;
  maxLength = 7;

  constructor(input: string) {
    if (input.length > this.maxLength) {
      throw new Error("limit size reach for text Input");
    }
    this.textInput = input;
  }

  adjustMaxLength(size: number): void {
    this.maxLength = size;
  }

  adjustInput(newInput: string): void {
    if (newInput.length > this.maxLength) {
      throw new Error("limit size reach for text Input");
    }
    this.textInput = newInput;
  }
}

const input1 = new Input("coulou");
console.log("input1", input1);

input1.adjustMaxLength(15);
console.log("input1", input1);

input1.adjustInput("couloucoucou");
console.log("input1", input1);

input1.adjustInput("couloucoucoucoucoucoucoucou");
console.log("input1", input1);
