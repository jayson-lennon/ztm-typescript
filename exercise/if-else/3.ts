// You are developing a weather advisory application that provides
// recommendations based on the current temperature. The application will
// suggest whether a user should wear a coat, bring an umbrella, or go out
// without any weather-related gear.
//
// Requirements:
// - Use an if-else statement to check the current temperature.
//   - If the temperature is below 10°C, print "It's cold, wear a coat."
//   - If the temperature is between 10°C and 20°C, print "Mild weather, bring
//     a light jacket."
//   - If the temperature is above 20°C, print "It's warm, no need for a
//     coat."
// - Use another if-else statement to check if it's raining.
//   - If it is raining, print "Don't forget your umbrella!"
//   - If it's not raining, print "No umbrella needed."
//
// Notes:
// - Optionally use functions
// - Change the initial constants to different values to check how your program
//   behaves.

/* eslint-disable */

// Change this to different values to check your program behavior.
const temperature = 15; // Example: 15°C

// Check the current temperature
if (temperature < 10) {
  console.log("It's cold, wear a coat.");
} else if (temperature >= 10 && temperature <= 20) {
  console.log("Mild weather, bring a light jacket.");
} else {
  console.log("It's warm, no need for a coat.");
}

// Change this to different values to check your program behavior.
const isRaining = true;

// Check if it's raining
if (isRaining) {
  console.log("Don't forget your umbrella!");
} else {
  console.log("No umbrella needed.");
}



