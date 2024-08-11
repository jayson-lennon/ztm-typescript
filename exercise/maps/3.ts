// You are developing a car rental system where each car is identified by its
// license plate number. The system should track the availability of cars in
// the rental fleet. Implement this system using a `Map` within a class.
//
// Requirements:
// - Create a `CarRental` class that uses a `Map` to store cars.
// - Each car should be represented by an object containing the car model
//   (string) and its availability status (boolean).
// - Implement functionality to:
//   - Add a new car to the rental fleet.
//   - Update the availability status of a car when it's rented or returned.
//   - Retrieve and print the details of a car by its license plate number.
//   - Print out all cars and their details.
// - Check your code by changing the availability of a car

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

  getCarDetails(licensePlate: string): Car | undefined {
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

// Expected Output:
// ABC123 - Model: Toyota Camry, Available: true
// XYZ789 - Model: Honda Accord, Available: false
// ABC123 - Model: Toyota Camry, Available: true
// XYZ789 - Model: Honda Accord, Available: true
