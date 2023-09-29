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
    currency: "USD",
  },
};

const box: Product = {
  name: "Box",
};

console.log(phone.price?.amount);

const getPrice = (item: Product): void => {
  if (item.price?.amount !== undefined) {
    console.log(
      `Product ${item.name} cost ${item.price.amount} ${item.price.currency}`
    );
  } else {
    console.log("not for sale");
  }
};

getPrice(phone);

getPrice(box);
