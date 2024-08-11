// You are developing a simple application to track the population of various
// cities. Each city will be mapped to its population, allowing you to easily
// update and retrieve the population data as needed. Your task is to implement
// this using a Map in TypeScript.
//
// Requirements:
// - Create a `Map` that maps city names (strings) to their population (numbers).
// - Add at least three cities and their respective populations to the `Map`.
// - Retrieve and print the population of a specific city.
// - Update the population of a city.
// - Print out all cities and their populations using a for..of loop.
//
// Notes:
// - Use any city and population count, fictional or otherwise.

/* eslint-disable */

// Create a Map to store city populations
const cityPopulation = new Map<string, number>();

// Add cities and their populations to the Map
cityPopulation.set("New York", 8419000);
cityPopulation.set("Los Angeles", 3980000);
cityPopulation.set("Chicago", 2716000);

// Retrieve and print the population of a specific city
const nyPopulation = cityPopulation.get("New York");
console.log(`Population of New York: ${nyPopulation}`);

// Update the population of a city
cityPopulation.set("Chicago", 2720000);
console.log(`Updated population of Chicago: ${cityPopulation.get("Chicago")}`);

// Print out all cities and their populations using a for..of loop
for (const [city, population] of cityPopulation) {
  console.log(`${city}: ${population}`);
}

// Expected Output:
// Population of New York: 8419000
// Updated population of Chicago: 2720000
// New York: 8419000
// Los Angeles: 3980000
// Chicago: 2720000

