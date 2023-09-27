// Using at least one ternary operator, create a program that can convert
// Celsius and Fahrenheit temperatures.
//
// To convert °C to °F: (°C * 1.8) + 32
// To convert °F to °C: (°F - 32) / 1.8
//
// To confirm that your program works properly, do the following:
// 1. convert 25°C to °F, and assert that the value is 77
// 1. convert 68°F to °C, and assert that the value is 20

import { strict as assert } from "assert";

function celsiusToFahrenheit(degreesC: number): number {
  return (degreesC * 1.8) + 32;
}

function fahrenheitToCelsius(degreesF: number): number {
  return (degreesF - 32) / 1.8
}

function convertTempTo(temp: number, toUnit: "C" | "F"): number {
  return toUnit === "C" ? fahrenheitToCelsius(temp) : celsiusToFahrenheit(temp);
}

assert.equal(convertTempTo(25, "F"), 77);
assert.equal(convertTempTo(68, "C"), 20);

