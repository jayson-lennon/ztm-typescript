// JavaScript
// Find more about Records at https://www.typescriptlang.org/docs/handbook/2/objects.html#records

type ItemQuantity = number;
type ItemPrice = number;
type ItemName = string;

type PriceMap = Record<ItemName, ItemPrice>;
type Cart = Record<ItemName, ItemQuantity>;

function addItemToCart(
  cart: Cart,
  item: ItemName,
  quantity: ItemQuantity
): void {
  if (!(item in cart)) {
    cart[item] = 0;
  }
  cart[item] += quantity;
}

function calculateTotal(cart: Cart, prices: PriceMap): number {
  let total = 0;
  for (const item in cart) {
    total += cart[item] * prices[item];
  }
  return total;
}

function applyDiscount(total: number, discount: number): number {
  return total * (1 - discount);
}

// Example usage
const cart: Cart = {};
const prices: PriceMap = {
  apple: 1.0,
  banana: 0.5,
};

addItemToCart(cart, 'apple', 2);
addItemToCart(cart, 'banana', 3);
const total = calculateTotal(cart, prices);
const discountedTotal = applyDiscount(total, 0.1);
console.log(`Total after discount: $${discountedTotal}`);
