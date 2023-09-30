// Using optional chaining, print the price amount of each listed product. If
// there is no price amount, then print "not for sale".

import { strict as assert } from "assert";

interface Product {
  name: string;
  price?: {
    amount: number;
    currency: string;
  };
}

const phone: Product = {
  name: "Phone",
  price: {
    amount: 300,
    currency: "USD"
  }
};

const box: Product = {
  name: "Box"
};

console.log(phone.price?.amount); // Output: 300
const boxAmount = box.price?.amount === undefined ? "not for sale" : box.price.amount;
console.log(boxAmount); // Output: "not for sale"


