// Convert the JavaScript program to a TypeScript program. See code comments
// and assertions to help determine how the code is supposed to behave. For
// more complex scenarios, consider using `console.log` to see the shape of an
// object. This will help when creating interfaces and type aliases.
//
// Both the JavaScript and TypeScript code are shown here for comparison. In
// practice you would not duplicate the code.


// JavaScript
// {
//   const assert = require("assert");
//   console.log("JavaScript");
//   class Theater {
//     constructor() {
//       this.showtimes = {};
//     }
//
//     addShowtime(movieTitle, showtime) {
//       if (!this.showtimes[movieTitle]) {
//         this.showtimes[movieTitle] = [];
//       }
//       this.showtimes[movieTitle].push(showtime);
//       console.log(`Added showtime ${showtime} for movie "${movieTitle}".`);
//     }
//
//     removeShowtime(movieTitle, showtime) {
//       if (this.showtimes[movieTitle]) {
//         const index = this.showtimes[movieTitle].indexOf(showtime);
//         if (index !== -1) {
//           this.showtimes[movieTitle].splice(index, 1);
//           console.log(`Removed showtime ${showtime} for movie "${movieTitle}".`);
//         } else {
//           console.log(`Showtime ${showtime} not found for movie "${movieTitle}".`);
//         }
//       } else {
//         console.log(`Movie "${movieTitle}" not found.`);
//       }
//     }
//
//     listShowtimes(movieTitle) {
//       if (this.showtimes[movieTitle]) {
//         console.log(`Showtimes for "${movieTitle}": ${this.showtimes[movieTitle].join(', ')}`);
//       } else {
//         console.log(`No showtimes found for movie "${movieTitle}".`);
//       }
//     }
//
//     getShowtimes(movieTitle) {
//       return this.showtimes[movieTitle];
//     }
//   }
//
//   // Example usage
//   const theater = new Theater();
//
//   theater.addShowtime("The Matrix", "18:00");
//   theater.addShowtime("The Matrix", "21:00");
//   theater.addShowtime("Inception", "20:00");
//
//   theater.listShowtimes("The Matrix"); // Outputs: Showtimes for "The Matrix": 18:00, 21:00
//
//   theater.removeShowtime("The Matrix", "18:00");
//   theater.listShowtimes("The Matrix"); // Outputs: Showtimes for "The Matrix": 21:00
//
//   theater.addShowtime("Inception", "20:00");
//
//   // It's possible to add showtimes that aren't actual times, but this is not desired.
//   theater.addShowtime("whoops", "whenever");
//   theater.listShowtimes("whoops"); // Outputs: Showtimes for "whoops": whenever
//
//   // Test cases
//   const testTheater = new Theater();
//   testTheater.addShowtime("a", "18:00");
//   testTheater.addShowtime("a", "21:00");
//   testTheater.addShowtime("b", "20:00");
//   testTheater.removeShowtime("a", "18:00");
//   assert.deepEqual(testTheater.getShowtimes("a"), ["21:00"]);
//   assert.deepEqual(testTheater.getShowtimes("b"), ["20:00"]);
// }

// TypeScript
import { strict as assert } from "assert";

{
  console.log("TypeScript");

  // Type alias for the movie titles.
  type Title = string;

  // We can use string templates in types. While this isn't robust checking, it
  // does give us a little extra besides just a string.
  type Showtime = `${number}:${number}`;

  class Theater {
    // Include the showtimes as a record object.
    private showtimes: Record<Title, Showtime[]>;

    constructor() {
      this.showtimes = {};
    }

    // types added to function signature
    addShowtime(title: Title, showtime: Showtime): void {
      if (!(title in this.showtimes)) {
        this.showtimes[title] = [];
      }
      this.showtimes[title].push(showtime);
      console.log(`Added showtime ${showtime} for movie "${title}".`);
    }

    // types added to function signature
    removeShowtime(title: Title, showtime: Showtime): void {
      if (title in this.showtimes) {
        const index = this.showtimes[title].indexOf(showtime);
        if (index !== -1) {
          this.showtimes[title].splice(index, 1);
          console.log(`Removed showtime ${showtime} for movie "${title}".`);
        } else {
          console.log(`Showtime ${showtime} not found for movie "${title}".`);
        }
      } else {
        console.log(`Movie "${title}" not found.`);
      }
    }

    // types added to function signature
    listShowtimes(title: Title): void {
      if (title in this.showtimes) {
        console.log(`Showtimes for "${title}": ${this.showtimes[title].join(', ')}`);
      } else {
        console.log(`No showtimes found for movie "${title}".`);
      }
    }

    getShowtimes(title: Title): Showtime[] | undefined {
      return this.showtimes[title];
    }
  }

  // Example usage
  const theater = new Theater();

  theater.addShowtime("The Matrix", "18:00");
  theater.addShowtime("The Matrix", "21:00");
  theater.addShowtime("Inception", "20:00");

  // Runtime error: must use an instance of `Showtime`
  // theater.addShowtime("The Matrix", { "time": "18:00" });

  theater.listShowtimes("The Matrix"); // Outputs: Showtimes for "The Matrix": 18:00, 21:00

  theater.removeShowtime("The Matrix", "18:00");
  theater.listShowtimes("The Matrix"); // Outputs: Showtimes for "The Matrix": 21:00

  // It's no longer possible to add showtimes that aren't actual times
  // theater.addShowtime("whoops", "whenever");

  // Test cases
  const testTheater = new Theater();
  testTheater.addShowtime("a", "18:00");
  testTheater.addShowtime("a", "21:00");
  testTheater.addShowtime("b", "20:00");
  testTheater.removeShowtime("a", "18:00");
  assert.deepEqual(testTheater.getShowtimes("a"), ["21:00"]);
  assert.deepEqual(testTheater.getShowtimes("b"), ["20:00"]);
}

