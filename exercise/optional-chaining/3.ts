// You are developing a customer support system where each customer has an
// account that may contain nested information such as support tickets and
// ticket details. Implement a function to retrieve ticket comments safely
// using optional chaining.
//
// Requirements:
// - Implement a function called `getTicketComments` that:
//   - Takes a `CustomerAccount` object and a `ticketId` as parameters.
//   - Uses optional chaining to safely retrieve and return the array of
//     comments for the given ticket ID.
//   - If the ticket or comments do not exist, return an empty array.

import { strict as assert } from "assert";

interface SupportTicket {
  ticketId: string;
  details?: {
    comments?: string[];
  };
}
interface CustomerAccount {
  name: string;
  supportTickets?: SupportTicket[];
}


//
// Write your function here
//


// Test cases
const testAccount: CustomerAccount = {
  name: "Alice Johnson",
  supportTickets: [
    {
      ticketId: "T123",
      details: {
        comments: ["Comment 1", "Comment 2"]
      }
    },
    {
      ticketId: "T456",
      details: {
        comments: ["Comment A"]
      }
    }
  ]
};
const commentsT123 = getTicketComments(testAccount, "T123");
assert.deepStrictEqual(commentsT123, ["Comment 1", "Comment 2"]);

const commentsT456 = getTicketComments(testAccount, "T456");
assert.deepStrictEqual(commentsT456, ["Comment A"]);

// Test 3: Retrieve comments for a non-existent ticket
const commentsT999 = getTicketComments(testAccount, "T999");
assert.deepStrictEqual(commentsT999, []);

// Test 4: Retrieve comments when no supportTickets are available
const emptyAccount: CustomerAccount = { name: "Bob Smith" };
const commentsEmpty = getTicketComments(emptyAccount, "T123");
assert.deepStrictEqual(commentsEmpty, []);


