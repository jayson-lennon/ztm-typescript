/* eslint-disable */
// Optional fields are convenient because they allow situations
// where it may not be appropriate to have data present. However,
// they make it cumbersome to access any additional data that is
// behind the optional field. For example, trying to access multiple
// optional objects one after the other requires multiple checks for
// `undefined` and multiple `if` blocks.
//
// With 'Optional Chaining', it is possible to combine all of the `if`
// blocks into a single line using the 'optional property access' operator.

// The optional property access operator is a question mark (?) and allows
// access to optional fields. It will continue to access optional fields
// using the following behavior:
//  - Access fields until `undefined` is encountered, and then set the
//    expression to `undefined.`
//  - Access fields until the last field is accessed, and then set the
//    expression to the value of the last field.
//

// Personally identifiable information
type Pii = {
  age?: number;
  address?: string;
};

type SearchResult = {
  name: string;
  pii?: Pii;
};

class Database {
  search(name: string): SearchResult | undefined {
    switch (name) {
      case "John":
        return {
          name: "John Doe",
          pii: {
            age: 22,
          },
        };
      case "Jane":
        return {
          name: "Jane Doe",
        };
    }
    return undefined;
  }
}

const database = new Database();

{
  // Try to print out someone's age `without` using optional chaining:
  const result = database.search("John");
  if (
    result !== undefined
    && result !== null
    && result.pii !== undefined
    && result.pii !== null
    && result.pii.age !== undefined
    && result.pii.age !== null
  ) {
    console.log(`${result.name} age is ${result.pii.age}`);
  }
}

{
  // Same as above, but using optional chaining:
  const result = database.search("John");
  // Use optional chaining to access optional fields:
  if (result?.pii?.age) {
    // Optional property access checks that `result` and `pii` both exist.
    // We don't use it to check `age` because that is checked by the `if` block,
    // which is used to determine if we should print anything.
    console.log(`${result.name} age is ${result.pii.age}`);
  }
}

// Another example using loops:

// Handful of types to create a class enrollment system.
type Instructor = {
  name: string;
  officeHours?: string;
};

type Class = {
  title: string;
  instructor?: Instructor;
};

type ClassEnrollment = {
  enrolled?: Class[];
  waitlisted?: Class[];
};

type Student = {
  name: string;
  classes?: ClassEnrollment;
};

const alice: Student = {
  name: "Alice",
  classes: {
    enrolled: [
      { title: "PROG114" },
      { title: "ECON200", instructor: { name: "Mary" } },
      {
        title: "MATH330",
        instructor: { name: "Simon", officeHours: "Tue Th 1PM-2PM" },
      },
    ],
  },
};

const terry: Student = { name: "Terry" };
const mike: Student = {
  name: "Mike",
  classes: {
    waitlisted: [{ title: "LIT302" }],
  },
};

const students = [alice, terry, mike];

// Print out the office hours for each enrolled class for each student:
for (let s of students) {
  // `classes` is optional, so it needs to be checked if it exists first.
  // The `enrolled` field of `classes` is also optional, so that
  // needs to be checked too.
  if (
    s.classes !== null &&
    s.classes !== undefined &&
    s.classes.enrolled !== null &&
    s.classes.enrolled !== undefined
  ) {
    // `s.classes.enrolled` is not undefined, so it can now be iterated:
    for (let klass of s.classes.enrolled) {
      // Instructors and their office hours are both optional, so they
      // need to get checked as well:
      if (
        klass.instructor !== null &&
        klass.instructor !== undefined &&
        klass.instructor.officeHours !== null &&
        klass.instructor.officeHours !== undefined
      ) {
        // Finally we can print the office hours:
        console.log(`${klass.title}: ${klass.instructor.officeHours}`);
      }
    }
  }
}

// Same as above, but using the 'optional property access' operator (?):
for (let s of students) {
  // 'Optional chaining' uses the optional property access operator and
  // allows checks to occur even if they are `undefined`. In this case,
  // `classes` might be `undefined`, so it is marked with `?`. If it is
  // _not_ undefined, then it will access the next field.
  if (s.classes?.enrolled) {
    // `s.classes.enrolled` is not `undefined`, so it can now be iterated:
    for (let klass of s.classes.enrolled) {
      // Use optional chaining again to see if the `instructor` field has data.
      // If so, we then access the `officeHours` field to confirm if the
      // instructor has any office hours:
      if (klass.instructor?.officeHours) {
        // Finally we can print the office hours:
        console.log(`${klass.title}: ${klass.instructor.officeHours}`);
      }
    }
  }
}
