// You are developing a car rental system where each car is identified by its
// license plate number. The system should track the availability of cars in
// the rental fleet. Implement this system using a `Map` within a class.
//
// Requirements:
// - Create a `CarRental` class that uses a `Map` to store cars.
// - Each car should be represented by an object containing the car model
//   (string) and its availability status (boolean).
// - Implement the following functions for the class:
//   - `addCar`: adds a new car to the rental fleet
//     - adding a car requires a license plate (string), model, and availability status
//   - `updateAvailability`: changes the status of a car (whether it's rented
//     or returned). This method must return `true` if the status was changed,
//     and `false` otherwise.
//   - `getCar`: searches for a car by license plate number and returns a `Car | undefined`
//   - `printAllCars: print out all cars and their details

import { strict as assert } from "assert";

interface Car {
  model: string;
  isAvailable: boolean;
}

// Create a CarRental class to manage the fleet
class CarRental {
  private fleet = new Map<string, Car>();

  addCar(licensePlate: string, model: string, isAvailable: boolean): void {
    this.fleet.set(licensePlate, { model, isAvailable });
  }

  updateAvailability(licensePlate: string, isAvailable: boolean): boolean {
    const car = this.fleet.get(licensePlate);
    if (car != null) {
      car.isAvailable = isAvailable;
      return true;
    } else {
      console.log(`Car with license plate ${licensePlate} not found.`);
      return false;
    }
  }

  getCar(licensePlate: string): Car | undefined {
    return this.fleet.get(licensePlate);
  }

  printAllCars(): void {
    for (const [licensePlate, car] of this.fleet) {
      console.log(`${licensePlate} - Model: ${car.model}, Available: ${car.isAvailable}`);
    }
  }
}

const rental = new CarRental();

rental.addCar("ABC123", "Toyota Camry", true);
rental.addCar("XYZ789", "Honda Accord", false);
rental.printAllCars();

rental.updateAvailability("XYZ789", true);
rental.printAllCars();

// Test cases:
const testRental = new CarRental();
testRental.addCar("test1", "car1", true);
testRental.addCar("test2", "car2", true);
testRental.updateAvailability("test1", false);
assert.equal(testRental.updateAvailability("unknown plate", false), false);
assert.equal(testRental.getCar("test1")?.isAvailable, false);
assert.equal(testRental.getCar("test2")?.isAvailable, true);



