// You are tasked with creating a program for storing and retrieving
// information about books for use in a library system.
//
// Requirements:
// - Create a generic class which can contain any type
// - The class must have the following functionality:
//   - Set initial books from an array of existing books
//   - Add new books
//   - Remove existing books 
//   - Viewing all books
//   - Viewing a subset of books based on a filter function
//
// To confirm that your program has the correct behavior, perform the following:
// - Create a new generic collection of books from the existing `libraryBooks`
//   array
// - Add `book3` to your collection
// - Assert that the total number of books in the collection is 3
// - Remove `book1` from the collection
// - Assert that the total number of books in the collection is 2
// - Retrieve all books written in the year 2023 or later
// - Assert that the total number of books retrieved is 1

import { strict as assert } from "assert";

class Collection<T> {
  private readonly items: T[] = [];

  constructor(initialItems: T[]) {
    this.items = initialItems;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getItems(): T[] {
    return this.items;
  }

  filterItems(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
}

interface Book {
  title: string;
  author: string;
  year: number;
}

const book1 = { title: "Book 1", author: "Author 1", year: 2021 };
const book2 = { title: "Book 2", author: "Author 2", year: 2022 };
const book3 = { title: "Book 3", author: "Author 3", year: 2023 };
const libraryBooks = [book1, book2];

const bookCollection = new Collection<Book>(libraryBooks);

bookCollection.addItem(book3);
assert.equal(bookCollection.getItems().length, 3);

bookCollection.removeItem(book1);
assert.equal(bookCollection.getItems().length, 2);

const filteredBooks = bookCollection.filterItems(book => book.year >= 2023);
assert.equal(filteredBooks.length, 1);
