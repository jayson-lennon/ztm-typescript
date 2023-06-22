// Create a queue class that allows items to be placed into the queue and
// removed from the queue. The queue must be generic over all types which
// permits any type of data to be placed into the queue.
//
// The queue requires the following:
// - Ability to add items to the queue
// - Ability to remove items to the queue
// - FIFO ordering. The first item added is the first item removed.
// - Functionality to view all items that exist in the queue
//
// To confirm that your queue works properly, perform these steps:
// 1. Create a queue over the string type
// 2. Add "Hello" to the queue
// 3. Add "World" to the queue
// 4. Take the next item out of the queue
// 5. Assert that the item is the string "Hello"
// 6. View all items in the queue
// 7. Assert that only "World" remains in the queue

import { strict as assert } from "assert";

class Queue<T> {
  private readonly items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringQueue = new Queue<string>();
stringQueue.enqueue("Hello");
stringQueue.enqueue("World");

const item = stringQueue.dequeue();
assert.equal(item, "Hello");

const allItems = stringQueue.getAll();
assert.deepStrictEqual(allItems, ["World"]);
