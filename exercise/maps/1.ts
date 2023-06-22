// You are working on some software for use in a time clock where employees can
// "punch in" and "punch out" to log the times when they come and go from their
// job. Your task involves searching the database for the correct employee to
// mark when they come and go. There can be upwards of thousands of employees
// at any given employer and employees use an ID number to punch in and out.
// Since there can be a large number of employees, searching through an array
// is too slow and employees don't want to waste time waiting for their punch
// to be confirmed.
//
// Requirements:
// - Create a class that contains a map of employee ID numbers to employee
//   names.
// - Populate the class with the provided employee information.
// - Write functionality to check if the given employee ID matches an employee
//   in the map. This should return a simple true/false: true if the employee
//   with the given ID was found, and false if the employee ID was not found
//
// To test your code:
// 1. Instantiate the class with the given employee data
// 2. Assert that an employee with ID 17 exists
// 3. Assert that an employee with ID 99 does not exist

import { strict as assert } from "assert";

type EmployeeId = number;
type EmployeeName = string;

interface Employee {
  id: EmployeeId;
  name: EmployeeName;
}

const employees = [
  { id: 1, name: "Alexander" },
  { id: 2, name: "Amelia" },
  { id: 3, name: "Ava" },
  { id: 4, name: "Benjamin" },
  { id: 5, name: "Charlotte" },
  { id: 6, name: "Daniel" },
  { id: 7, name: "Emily" },
  { id: 8, name: "Emma" },
  { id: 9, name: "Ethan" },
  { id: 10, name: "Harper" },
  { id: 11, name: "Isabella" },
  { id: 12, name: "James" },
  { id: 13, name: "Liam" },
  { id: 14, name: "Matthew" },
  { id: 15, name: "Mia" },
  { id: 16, name: "Noah" },
  { id: 17, name: "Olivia" },
  { id: 18, name: "Samuel" },
  { id: 19, name: "Sophia" },
  { id: 20, name: "William" },
];

