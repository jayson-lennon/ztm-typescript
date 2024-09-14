// You are building an event management system that filters and counts events
// based on their type. You have an array of event objects, where each event
// has a type and a name. You need to filter the events by a specific type and
// count how many events match that type. You'll use arrow functions to
// implement this functionality.
//
// Requirements:
// - Use an arrow function to filter the events array array so it only has
//   "click" events.
// - Use an arrow function to count the number of filtered "click" events.
// - Print out the filtered events and the count of matching events.

import { strict as assert } from "assert";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Event = {
  type: string;
  name: string;
}

const events: Event[] = [
  { type: "click", name: "Button Clicked" },
  { type: "scroll", name: "Page Scrolled" },
  { type: "click", name: "Link Clicked" },
  { type: "hover", name: "Mouse Hovered" }
];

const filterEventsByType = (arr: Event[], eventType: string): Event[] => arr.filter(event => event.type === eventType);
const countEventsByType = (arr: Event[], eventType: string): number => arr.filter(event => event.type === eventType).length;

const clickEvents = filterEventsByType(events, "click");
const clickEventCount = countEventsByType(events, "click");

console.log("Filtered Events:", clickEvents);
console.log("Count of Click Events:", clickEventCount);

// Test cases. These will confirm if your answer is correct.
assert.deepStrictEqual(clickEvents, [
  { type: "click", name: "Button Clicked" },
  { type: "click", name: "Link Clicked" }
]);

assert.equal(clickEventCount, 2);

