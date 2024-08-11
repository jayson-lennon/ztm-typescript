// JavaScript
console.log("JavaScript");

function addItemToCart(cart, item, quantity) {
  if (!cart[item]) {
    cart[item] = 0;
  }
  cart[item] += quantity;
}

// JavaScript function to calculate total price
function calculateTotal(cart, prices) {
  let total = 0;
  for (const item in cart) {
    total += cart[item] * prices[item];
  }
  return total;
}

// JavaScript function to apply discount
function applyDiscount(total, discount) {
  return total * (1 - discount);
}

// Example usage
const cart = {};
const prices = {
  apple: 1.0,
  banana: 0.5
};

addItemToCart(cart, 'apple', 2);
addItemToCart(cart, 'banana', 3);
const total = calculateTotal(cart, prices);
const discountedTotal = applyDiscount(total, 0.1);
console.log(`Total after discount: $${discountedTotal}`);

