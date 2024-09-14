// You are tasked with managing a list of products in an e-commerce
// application. Each product has a name and a price. You need to iterate over
// the list of products and print out their details.
//
// Requirements:
// - Use a for..of loop to iterate over the array of products.
// - Inside the loop, print out the name and price of each product in the
//   format: "Product: {name}, Price: ${price}".


const products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 499.99 },
  { name: "Tablet", price: 299.99 },
  { name: "Headphones", price: 99.99 },
];

for (const product of products) {
  console.log(`Product: ${product.name}, Price: $${product.price}`);
}

// Expected Output:
// Product: Laptop, Price: $999.99
// Product: Smartphone, Price: $499.99
// Product: Tablet, Price: $299.99
// Product: Headphones, Price: $99.99
//
