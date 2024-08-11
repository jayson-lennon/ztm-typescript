// Convert the JavaScript program to a TypeScript program. See code comments
// and assertions to help determine how the code is supposed to behave. For
// more complex scenarios, consider using `console.log` to see the shape of an
// object. This will help when creating interfaces and type aliases.
//
// Both the JavaScript and TypeScript code are shown here for comparison. In
// practice you would not duplicate the code.


const assert = require("assert");

class Theater {
  constructor() {
    this.showtimes = {};
  }

  addShowtime(movieTitle, showtime) {
    if (!this.showtimes[movieTitle]) {
      this.showtimes[movieTitle] = [];
    }
    this.showtimes[movieTitle].push(showtime);
    console.log(`Added showtime ${showtime} for movie "${movieTitle}".`);
  }

  removeShowtime(movieTitle, showtime) {
    if (this.showtimes[movieTitle]) {
      const index = this.showtimes[movieTitle].indexOf(showtime);
      if (index !== -1) {
        this.showtimes[movieTitle].splice(index, 1);
        console.log(`Removed showtime ${showtime} for movie "${movieTitle}".`);
      } else {
        console.log(`Showtime ${showtime} not found for movie "${movieTitle}".`);
      }
    } else {
      console.log(`Movie "${movieTitle}" not found.`);
    }
  }

  listShowtimes(movieTitle) {
    if (this.showtimes[movieTitle]) {
      console.log(`Showtimes for "${movieTitle}": ${this.showtimes[movieTitle].join(', ')}`);
    } else {
      console.log(`No showtimes found for movie "${movieTitle}".`);
    }
  }

  getShowtimes(movieTitle) {
    return this.showtimes[movieTitle];
  }
}

// Example usage
const theater = new Theater();

theater.addShowtime("The Matrix", "18:00");
theater.addShowtime("The Matrix", "21:00");
theater.addShowtime("Inception", "20:00");

theater.listShowtimes("The Matrix"); // Outputs: Showtimes for "The Matrix": 18:00, 21:00

theater.removeShowtime("The Matrix", "18:00");
theater.listShowtimes("The Matrix"); // Outputs: Showtimes for "The Matrix": 21:00

theater.addShowtime("Inception", "20:00");

// It's possible to add showtimes that aren't actual times, but this is not desired.
theater.addShowtime("whoops", "whenever");
theater.listShowtimes("whoops"); // Outputs: Showtimes for "whoops": whenever

// Test cases
const testTheater = new Theater();
testTheater.addShowtime("a", "18:00");
testTheater.addShowtime("a", "21:00");
testTheater.addShowtime("b", "20:00");
testTheater.removeShowtime("a", "18:00");
assert.deepEqual(testTheater.getShowtimes("a"), ["21:00"]);
assert.deepEqual(testTheater.getShowtimes("b"), ["20:00"]);
