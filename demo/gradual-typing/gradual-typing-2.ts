// JavaScript
{
  // console.log("JavaScript");

  // function addItemToCart(cart, item, quantity) {
  //   if (!cart[item]) {
  //     cart[item] = 0;
  //   }
  //   cart[item] += quantity;
  // }
  //
  // // JavaScript function to calculate total price
  // function calculateTotal(cart, prices) {
  //   let total = 0;
  //   for (const item in cart) {
  //     total += cart[item] * prices[item];
  //   }
  //   return total;
  // }
  //
  // // JavaScript function to apply discount
  // function applyDiscount(total, discount) {
  //   return total * (1 - discount);
  // }
  //
  // // Example usage
  // const cart = {};
  // const prices = {
  //   apple: 1.0,
  //   banana: 0.5
  // };
  //
  // addItemToCart(cart, 'apple', 2);
  // addItemToCart(cart, 'banana', 3);
  // const total = calculateTotal(cart, prices);
  // const discountedTotal = applyDiscount(total, 0.1);
  // console.log(`Total after discount: $${discountedTotal}`);
}

// TypeScript
{
  console.log("\nTypeScript");

  // Record type is an object that has multiple properties. Each property uses
  // `string` for key and `number` for value.
  type ItemName = string;
  type ItemQuantity = number;
  type ItemPrice = number;

  type Cart = Record<ItemName, ItemQuantity>;

  // Alternate definition of Cart
  // interface Cart {
  //   // index signature allows any number of `string` properties set to a
  //   // `number`
  //   [item: string]: number;
  // }

  type PriceMap = Record<ItemName, ItemPrice>;

  function addItemToCart(cart: Cart, item: ItemName, quantity: ItemQuantity): void {
    if (item in cart) {
      cart[item] += quantity;
    } else {
      cart[item] = 1;
    }
  }

  // JavaScript function to calculate total price
  function calculateTotal(cart: Cart, prices: PriceMap): number {
    let total = 0;
    for (const item in cart) {
      total += cart[item] * prices[item];
    }
    return total;
  }

  // JavaScript function to apply discount
  function applyDiscount(totalPrice: number, percentDiscount: number): number {
    return totalPrice * (1 - percentDiscount);
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
}
