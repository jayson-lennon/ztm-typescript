// You are developing a system to manage vehicles in a fleet. The system needs
// to handle different types of vehicles, such as cars and trucks. You'll use
// declaration merging to extend the Vehicle interface to include additional
// properties and methods specific to each vehicle type.
//
// Requirements:
// - Define an initial interface Vehicle with the following properties:
//   -  make: A string representing the vehicle's make (e.g., "Honda").
//   -  model: A string representing the vehicle's model (e.g., "Civic").
//   -  year: A number representing the year of manufacture.
// - Use declaration merging to extend the Vehicle interface for Car with
//   additional properties:
//   -  numberOfDoors: A number representing the number of doors on the car.
//   -  hasSunroof: A boolean indicating whether the car has a sunroof.
// - Use declaration merging to extend the Vehicle interface for Truck with
//   additional properties:
//   -  payloadCapacity: A number representing the payload capacity in kilograms.
//   -  numberOfAxles: A number representing the number of axles on the truck.
// - Create instances of Car and Truck, set all properties to any values you'd
//   like, and print their details including the new properties.
//   - Only print the new properties if they are not null.

// Initial Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
}

// Extend Vehicle interface for Car using declaration merging
interface Vehicle {
  numberOfDoors?: number;
  hasSunroof?: boolean;
}

// Extend Vehicle interface for Truck using declaration merging
interface Vehicle {
  payloadCapacity?: number;
  numberOfAxles?: number;
}

// Implementing the extended Car interface
const car: Vehicle = {
  make: "Honda",
  model: "Civic",
  year: 2022,
  numberOfDoors: 4,
  hasSunroof: true
};

// Implementing the extended Truck interface
const truck: Vehicle = {
  make: "Ford",
  model: "F-150",
  year: 2023,
  payloadCapacity: 3000,
  numberOfAxles: 2
};

// Print the details of the Car and Truck
console.log(`Car Details:`);
console.log(`Make: ${car.make}`); // Make: Honda
console.log(`Model: ${car.model}`); // Model: Civic
console.log(`Year: ${car.year}`); // Year: 2022
if (car.numberOfDoors != null) {
  console.log(`Number of Doors: ${car.numberOfDoors}`); // Number of Doors: 4
}
if (car.hasSunroof != null) {
  console.log(`Has Sunroof: ${car.hasSunroof ? "yes" : "no"} `); // Has Sunroof: true
}

console.log(`Truck Details: `);
console.log(`Make: ${truck.make} `); // Make: Ford
console.log(`Model: ${truck.model} `); // Model: F-150
console.log(`Year: ${truck.year} `); // Year: 2023
if (truck.payloadCapacity != null) {
  console.log(`Payload Capacity: ${truck.payloadCapacity} kg`); // Payload Capacity: 3000 kg
}
if (truck.numberOfAxles != null) {
  console.log(`Number of Axles: ${truck.numberOfAxles} `); // Number of Axles: 2
}
