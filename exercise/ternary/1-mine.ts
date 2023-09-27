// Using at least one ternary operator, create a program that can convert
// Celsius and Fahrenheit temperatures.
//
// To convert °F to °C: (°C * 1.8) + 32
// To convert °C to °F: (°F - 32) / 1.8
//
// To confirm that your program works properly, do the following:
// 1. convert 25°C to °F, and assert that the value is 77
// 1. convert 68°F to °C, and assert that the value is 20

import { strict as assert } from "assert";

const temp1 = 25;
const temp2 = 68;

function convertTemp(temperature: number, type: "C" | "F"): number {
  let temporaryTemp: number;
  type === "C"
    ? (temporaryTemp = temperature * 1.8 + 32)
    : (temporaryTemp = (temperature - 32) / 1.8);
  return temporaryTemp;
}

console.log(convertTemp(temp1, "C"));
assert.equal(convertTemp(temp1, "C"), 77);

console.log(convertTemp(temp2, "F"));
assert.equal(convertTemp(temp2, "F"), 20);
