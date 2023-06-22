/* eslint-disable */

// You can define optional fields in your object types. Optional fields are
// fields that may or may not be present in an object. You can make a field
// optional by appending a question mark "?" to its name in the type
// definition. This is useful when you have an object with some properties that
// are not always required.

// Create a type for two different warranties:
type Warranty = "standard" | "extended";

// Function to return what should be displayed for each warranty:
function warrantyInfo(warranty: Warranty): String {
  switch (warranty) {
    case "standard":
      return "90 day warranty";
    case "extended":
      return "180 day extended warrantyy";
  }
}

// Line item to be part of a larger order:
interface LineItem {
  // Name of th item
  name: string;
  // Amount of the item being purchased
  quantity: number;
  // Optional warranty associated with the line item. We use a question
  // mark (?) to indicate that this field is optional. If the field is
  // provided, then it _must_ be type Warranty (so 'standard' or 'extended').
  // If the field is missing, then attempting to access it will result
  // in `undefined`.
  warranty?: Warranty;
}

// Function to print out the line item
function printLine(item: LineItem): void {
  console.log(`Item: ${item.name}`);
  console.log(`Quantity: ${item.quantity}`);
  // This is a type guard. Since the `warranty` field is optional, it might
  // be `undefined`. We check to this situation here:
  if (item.warranty !== undefined) {
    // When the warranty is provided, we will print out the info returned
    // from the `warrantyInfo` function:
    console.log(`Warranty: ${warrantyInfo(item.warranty)}`);
  } else {
    // If the warranty is `undefined`, then we will print this instead:
    console.log(`Warranty: None`);
  }
}

// Create a new LineItem:
const charger: LineItem = {
  name: "box fan",
  quantity: 1,
  // We don't include the warranty field, and this is OK because we marked
  // the field as optional in the LineItem type.
};

printLine(charger);

const heater: LineItem = {
  name: "space heater",
  quantity: 2,
  // The warranty is included with this line item:
  warranty: "standard",
};

printLine(heater);
