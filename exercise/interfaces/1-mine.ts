import { strict as assert } from "assert";

// An amusement park operator is rolling out a new line-priority scheme where
// people can get priority ride access based on their ticket. The operator
// needs a program to determine if the person is allowed to use the priority
// line based on various conditions.
//
// The park has these kinds of tickets:
// - "Standard"
// - "Premium"
// - "Member"
// - "VIP"
//
// Access to the priority line is governed by these rules:
// - Standard tickets get no priority access
// - Premium tickets can access the priority line only on weekdays
// - Member tickets can access the priority line on weekends and weekdays
// - VIP tickets can access the priority line at any time
//
// The data provided as a `day` in the interface is:
// - "weekday" for weekdays
// - "weekend" for weekends
// - "holidays" for holidays
//
// For each kind of ticket, create a class. Each class must implement the
// `PriorityAccess` interface and adhere to the rules described above.

interface PriorityAccess {
  weekday: boolean;
  weekend: boolean;
  holidays: boolean;
}

class Standard implements PriorityAccess {
  weekday = false;
  weekend = false;
  holidays = false;
}

class Premium implements PriorityAccess {
  weekday = true;
  weekend = false;
  holidays = false;
}

class Member implements PriorityAccess {
  weekday = true;
  weekend = true;
  holidays = false;
}

class VIP implements PriorityAccess {
  weekday = true;
  weekend = true;
  holidays = true;
}

// To confirm that your code works, perform the following:
// 1. Create a standard ticket and assert that it cannot access the priority
//    line

const standardTicket = new Standard();
assert.equal(standardTicket.weekday, false);
assert.equal(standardTicket.weekend, false);
assert.equal(standardTicket.holidays, false);

// 2. Create a premium ticket and assert that it can only access the priority
//    line when the day is "weekday"

const premiumTicket = new Premium();
assert.equal(premiumTicket.weekday, true);
assert.equal(premiumTicket.weekend, false);
assert.equal(premiumTicket.holidays, false);

// 3. Create a member ticket and assert that it can only access the priority
//    line when the day is "weekday" or "weekend"

const memberTicket = new Member();
assert.equal(memberTicket.weekday, true);
assert.equal(memberTicket.weekend, true);
assert.equal(memberTicket.holidays, false);

// 4. Create a VIP ticket and assert that it can always access the priority
//    line

const vipTicket = new VIP();
assert.equal(vipTicket.weekday, true);
assert.equal(vipTicket.weekend, true);
assert.equal(vipTicket.holidays, true);
