// You are building a system to manage books in a library. Each book has a
// title, an author, and a status indicating whether it is currently checked
// out or available. You'll create a class to represent a book, with methods to
// check the book out, return it, and display its information.
//
// Requirements:
// - Create a `Book` class with the following properties:
//   - `title`: A string representing the title of the book.
//   - `author`: A string representing the author of the book.
//   - `isCheckedOut`: A boolean indicating whether the book is checked out
//     (initially false).
// - Add a method `checkOut()` to the Book class that sets the `isCheckedOut`
//   property to true.
// - Add a method `returnBook()` to the Book class that sets the `isCheckedOut`
//   property to false.
// - Add a method displayInfo() to the Book class that prints out the `title`,
//   `author`, and `status` of the book.
// - Create an instance of the `Book` class, check it out, display its
//   information, return it, and then display its information again.


import { strict as assert } from "assert";

// Create an instance of the Book class.
//
// Replace `null` with your class instance.
//
const myBook = null;

// Put your method calls to "check out" a book here.
// 
assert.equal(myBook.isCheckedOut, true);

// Put your method calls to "return" a book here.
//
assert.equal(myBook.isCheckedOut, false);

