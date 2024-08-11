// You are working on an inventory management system that keeps track of items
// in a warehouse. Each item has various properties, such as its name,
// quantity, and location. You need to iterate over the properties of an item
// object and print out the details.
//
// Requirements:
//
// - Create an object representing an item in the inventory with the following
//   properties:
//   - `name`: a string representing the item's name.
//   - `quantity`: a number representing the quantity of the item in stock.
//   - `location`: a string representing the item's location in the warehouse.
// - Use a for..in loop to iterate over the properties of the item object.
// - Inside the loop, print out each property and its corresponding value in
//   the format: "{property}: {value}".

const item = {
  name: "Laptop",
  quantity: 25,
  location: "Aisle 3, Shelf 2",
};

for (const property in item) {
  console.log(`${property}: ${item[property as keyof typeof item]}`);
}

// Expected Output:
// name: Laptop
// quantity: 25
// location: Aisle 3, Shelf 2

